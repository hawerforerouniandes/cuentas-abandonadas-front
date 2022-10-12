import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GetAdministrativoService } from 'src/app/domain/usecases/administrativo/administrativo.service';
import { NotificationsService } from 'src/app/presentation/shared/services/notifications.service';
import { StorageService } from 'src/app/presentation/shared/services/storage.service';

@Component({
  selector: 'app-listar-funcionario-aplicativo',
  templateUrl: './listar-funcionario-aplicativo.component.html',
  styleUrls: ['./listar-funcionario-aplicativo.component.css']
})
export class ListarFuncionarioAplicativoComponent implements OnInit {
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
    this._servicioAdministrativo.ListarFuncionarioEntidadPorTipo("APLICATIVO").subscribe((ResultData) => {

      this.dataSource.data = ResultData;
      this.dataSource.paginator = this.paginator;
      preloader.close();
    });
  }

}
