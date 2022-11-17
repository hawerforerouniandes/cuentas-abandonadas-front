import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GetAdministrativoService } from 'src/app/domain/usecases/administrativo/administrativo.service';
import { NotificationsService } from 'src/app/presentation/shared/services/notifications.service';
import { StorageService } from 'src/app/presentation/shared/services/storage.service';

@Component({
  selector: 'app-listar-funcionario-tecnologico',
  templateUrl: './listar-funcionario-tecnologico.component.html',
  styleUrls: ['./listar-funcionario-tecnologico.component.css']
})
export class ListarFuncionarioTecnologicoComponent implements OnInit {
  usuario : any;
  displayedColumns: string[] = ['TipoIdentificacion','Identificacion','PrimerNombre', 'SegundoNombre','PrimerApellido','segundoApellido','Telefono','Direccion','Actions'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private _servicioAdministrativo: GetAdministrativoService,
              private _notifications: NotificationsService,
              private _storageservice: StorageService) { }

  ngOnInit(): void {
    this.usuario = this._storageservice.getItem('payload').infoUsuario;
    const preloader = this._notifications.showPreloader();
    this._servicioAdministrativo.ListarFuncionarioEntidadPorTipo("TECNOLOGICO").subscribe((ResultData) => {

      this.dataSource.data = ResultData;
      this.dataSource.paginator = this.paginator;
      preloader.close();
    });
  }

}