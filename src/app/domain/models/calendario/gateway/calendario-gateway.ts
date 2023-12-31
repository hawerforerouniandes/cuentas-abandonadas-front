
import {Observable} from 'rxjs';
import { ICalendario } from '../calendario';

export abstract class CalendarioGateway {
  abstract ListarCalendarios(): Observable<ICalendario[]>;
  abstract GenerarCalendario(data: ICalendario): Observable<any>;
  abstract GetCalendario(id, fechaDesde: string): Observable<ICalendario>;
  abstract EditarCalendario(data: ICalendario): Observable<any>;

}
