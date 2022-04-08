import {Observable} from 'rxjs';
import { IEstadoCargue } from '../iestadocargue';

export abstract class ReporteGateway {
  abstract getReporteEstadoCargueExcel(estadocargue: any): Observable<any>;
  abstract getReporteDetalladoExcel(filtros: any): Observable<any>;
  abstract GetEstadoCargueFilter(dataQuery): Observable<any>;

  abstract getReporteConsolidadoExcel(filtros: any): Observable<any>;
}