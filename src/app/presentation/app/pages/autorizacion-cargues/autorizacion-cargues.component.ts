import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { ICargue } from './../../../../domain/models/archivo/icargue';
import { NotificationsService } from './../../../shared/services/notifications.service';
import { StorageService } from './../../../shared/services/storage.service';
import { GetArchivoUseCaseService } from './../../../../domain/usecases/archivo/get-archivo-use-case.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autorizacion-cargues',
  templateUrl: './autorizacion-cargues.component.html',
  styleUrls: ['./autorizacion-cargues.component.css']
})
export class AutorizacionCarguesComponent implements OnInit {
  displayedColumns: string[] = ['Entidad', 'NombreArchivo', 'FechaCargue', 'TipoArchivo', 'NumeroCuentas', 'Estado', 'Acciones'];
  idOrganizacion: any;
  usuario : any;
  cargues = new MatTableDataSource<ICargue>();
  carguesPendienteAutorizacion: ICargue[];
  carguesCargaProcesada: ICargue[];
  ip: any;


  @ViewChild(MatPaginator) paginator:  MatPaginator;

  constructor(private _getarchivousecase: GetArchivoUseCaseService,
              private _storageservice: StorageService,
              private _notifications: NotificationsService,
              private _http: HttpClient,
              private _router : Router) { }

  ngOnInit(): void {

    this._http.get('http://api.ipify.org/?format=json').subscribe((res: any) => {
     this.ip = res.ip;
    });

    this.usuario = this._storageservice.getItem('payload').infoUsuario;
    this.idOrganizacion = this.usuario.idOrganizacion;
    const preloader = this._notifications.showPreloader();
   
    this._getarchivousecase.CarguesXEstado("PENDIENTE_AUTORIZACION").subscribe((ResultData) => {
      this.carguesPendienteAutorizacion = ResultData;
      this.cargues.data = this.carguesPendienteAutorizacion.concat(this.carguesCargaProcesada);
      this.cargues.data = ResultData;

         this._getarchivousecase.CarguesXEstado("CARGA_PROCESADA").subscribe((ResultData) => {
          ResultData.map((resultado) =>{
            this.cargues.data.push(resultado)
          })

          this._getarchivousecase.CarguesXEstado("VoBo1").subscribe((ResultData) => {
            ResultData.map((resultado) =>{
              this.cargues.data.push(resultado)
            })
          
            // console.log(this.cargues.data);
            this.cargues.paginator = this.paginator;
            preloader.close();
          });
      });
    });    
  }

  cambiarestado(idCargue:any, tipoestado:string): void{
    var mensajeestado = '';
    switch(tipoestado){
      case 'confirmar_entidad':
        mensajeestado = '¿ Esta seguro que desea aprobar el cargue ?';
        break;
      case 'rechazar_entidad':
        mensajeestado = '¿ Esta seguro que desea rechazar el cargue ?';
        break;
      case 'confirmar_icetex':
        mensajeestado = '¿ Esta seguro que desea aprobar el cargue ?';
        break;
      case 'rechazar_icetex':
        mensajeestado = '¿ Esta seguro que desea rechazar el cargue ?';
        break;
    }
    const validar = confirm(mensajeestado);
    if(validar){
      this._getarchivousecase.CambiarEstadoCargue({idCargue,
                                                      usuario: this.usuario.usuario,
                                                      ip: this.ip || '193.168.1.1',
                                                      operacion: tipoestado})
                              .subscribe((ResulData) =>{
                                alert(ResulData?.mensaje);
                                window.location.reload();
                              });
    }
  }

  llevarpdf(id: number,tipo: string)
  {


    if(tipo === 'TRASLADO')
    {
      this._router.navigate([`/autorizacion-traslado-pdf/${id}`]);
    }else{
      this._router.navigate([`/autorizacion-reintegro-pdf/${id}`]);
    }


  }

  vobuenoTesoreria(idCargue:any){

    this._getarchivousecase.CambiarEstadoCargue({idCargue,
      usuario: this.usuario.usuario,
      ip: this.ip || '193.168.1.1',
      operacion: 'VoBo-Tesoreria'})
      .subscribe((ResulData) =>{
      alert(ResulData?.mensaje);
      window.location.reload();
});

  }

  rechazar(id:number){
    this._router.navigate([`/autorizacion-rechazo/${id}`]);

  }

  

}
