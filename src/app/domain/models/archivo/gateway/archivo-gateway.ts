import {IRequestLogin, IResponseLogin} from '../../login/ilogin';
import {Observable} from 'rxjs';
import {Itipocargue} from '../itipocargue';
import {ICargue} from '../icargue';
import {IArchivo} from '../iarchivo';
import {ICambiarEstado} from '../icambiar-estado';
import { IConsolidado } from '../iconsolidado';
import { IDetallado } from '../idetallado';
import { Iimpresionpdf } from '../Iimpresionpdf';

export abstract class ArchivoGateway {

  abstract GetPfd(id: any,tipo: string): Observable<Iimpresionpdf[]>;
  abstract TipoCargue(): Observable<Itipocargue[]>;
  abstract Listar(idOrganizacion: any): Observable<ICargue[]>;
  abstract CarguesXEstado(estado: any): Observable<ICargue[]>;
  abstract Cargar(data: IArchivo): Observable<any>;
  abstract LogCargue(idCargue): Observable<any>;
  abstract CambiarEstadoCargue(data: ICambiarEstado): Observable<any>;
  abstract GetConsolidado(tipoArchivo: string, estado: string): Observable<IConsolidado[]>;
  abstract GetConsolidadoXEntidad(tipoArchivo: string, estado: string, entidadId: string): Observable<IConsolidado[]>;
  abstract GetConsolidadoXFechaCargue(tipoArchivo: string, estado: string, fechaInicio: string, fechaFin: string): Observable<IConsolidado[]>;
  abstract GetDetallado(entidad: string, tipoArchivo: string, fechaInicial: string,fechaFinal: string): Observable<IDetallado[]>;
}
