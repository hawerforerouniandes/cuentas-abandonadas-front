import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { InterfazContableList } from './../../../../../domain/models/interfaz-contable/interfaz-contable-list';
import { NotificationsService } from './../../../../shared/services/notifications.service';
import { GetInterfazContableUseCaseService } from './../../../../../domain/usecases/interfaz-contable/get-interfaz-contable-use-case-service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { GetReporteService } from 'src/app/domain/usecases/reportes/get-reporte.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarInterfazContableComponent implements OnInit {
  displayedColumns: string[] = ['tipointerfase', 'anoproceso', 'mesproceso', 'fechageneracionborrador', 'fechageneracionapo', 'monto', 'estado', 'Acciones'];
  interfazContableList = new MatTableDataSource<InterfazContableList>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _getInterfazContableUseCaseService: GetInterfazContableUseCaseService,
    private _notifications: NotificationsService,
    private _getreportecase: GetReporteService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    const preloader = this._notifications.showPreloader();

    /*
    this._getInterfazContableUseCaseService.ListarInterfazContable().subscribe((res) => {
      this.interfazContableList.data = res;
      console.log("RES1", res);
      this.interfazContableList.paginator = this.paginator;
      preloader.close();
    },  (error: any)  => {
      console.error("Error trayendo las interfaces", error);
      preloader.close();
    });
    */

    this._getInterfazContableUseCaseService.ListarInterfazContable().pipe(map((response) => response))
    .subscribe((array:InterfazContableList[]) => {
         let modifiedArray = array.map((item:InterfazContableList) => {
           console.log(item);
               return {
                  nroprocesoborrador: item.nroprocesoborrador,
                  tipointerfase: item.tipointerfase,
                  anoproceso:item.anoproceso,
                  mesproceso:item.mesproceso,
                  fechageneracionborrador: item.fechageneracionborrador,
                  fechageneracionapo: item.fechageneracionapo == "1/1/0001 12:00:00 AM" ? "" : item.fechageneracionapo,
                  monto: item.monto,
                  estado: item.estado
               }
         })
         this.interfazContableList.data = modifiedArray;
         this.interfazContableList.paginator = this.paginator;
         console.log(this.paginator);
         console.log(this.interfazContableList.paginator);
         preloader.close();         
    });
    
  }

  transmitir(data: InterfazContableList) {
    const preloader = this._notifications.showPreloader();
    this._getInterfazContableUseCaseService.TrasmitirInterfazContable(data).subscribe((res) => {
      console.log("Resultado", res);
      preloader.close();
      //window.location.reload();
    },  (error: any)  => {
      console.error("Error transmitiendo", error);
      preloader.close();
    });
  }

  reporteConsolidado(data: InterfazContableList)
  {
    
    const {nroprocesoborrador} = data; 
    console.log(nroprocesoborrador);

  }

  descargarInterfaz(data: InterfazContableList)
  {
    const preloader = this._notifications.showPreloader();

    const {nroprocesoborrador} = data; 
    console.log(nroprocesoborrador);

    this._getreportecase.getReporteInterfazExcel(nroprocesoborrador).subscribe(response => {
      
      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(response);
      downloadLink.setAttribute('download', "InterfazContable"+nroprocesoborrador);
      document.body.appendChild(downloadLink);
      downloadLink.click();
      preloader.close();
    })

  }


}
