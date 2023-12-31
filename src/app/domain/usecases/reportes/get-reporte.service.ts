import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReporteGateway } from '../../models/reporte/gateway/reporte-gateway';
import { IEstadoCargue } from '../../models/reporte/iestadocargue';

@Injectable({
    providedIn: 'root',
  })
  export class GetReporteService {

    constructor(private _reporteGetway: ReporteGateway) {}

    getReporteEstadoCargaexcel(estadocargue:any): Observable<any> {
        return this._reporteGetway.getReporteEstadoCargueExcel(estadocargue);
    }

    getReporteCargaRechazadoexcel(estadocargue:any): Observable<any> {
        return this._reporteGetway.getReporteCargueRechazadoExcel(estadocargue);
    }

    getReporteConsolidadoEntidadexcel(estadocargue:any): Observable<any> {
      return this._reporteGetway.getReporteConsolidadoEntidadexcel(estadocargue);
  }

    getReporteDetalladoExcel(filtros: any): Observable<any> {
      return this._reporteGetway.getReporteDetalladoExcel(filtros);
    }

    GetEstadoCargueFilter(dataQuery): Observable<any>{
      return this._reporteGetway.GetEstadoCargueFilter(dataQuery);
    }

    GetCargueRechazadoFilter(dataQuery): Observable<any>{
      return this._reporteGetway.GetCargueRechazadoFilter(dataQuery);
    }

    getReporteConsolidadoExcel(filtros: any): Observable<any> {
      return this._reporteGetway.getReporteConsolidadoExcel(filtros);
    }

    getReporteInterfazExcel(proceso: string): Observable<any> {
      return this._reporteGetway.getReporteInterfazExcel(proceso);
    }

    getReporteCertificacionSaldos(entidad: string,fecha: string): Observable<any> {
      return this._reporteGetway.getReporteCertificacionSaldos(entidad,fecha);
    }

    GetConsolidadoEntidadFilter(dataQuery): Observable<any>{
      return this._reporteGetway.GetConsolidadoEntidadFilter(dataQuery);
    }

    GetAdjudicacionSubastaFilter(dataQuery): Observable<any>{
      return this._reporteGetway.GetAdjudicacionSubastaFilter(dataQuery);
    }

    GetAdjudicacionSubastaExcel(data:any): Observable<any> {
      return this._reporteGetway.GetAdjudicacionSubastaExcel(data);
    }

}