import {IRequestLogin, IResponseLogin} from '../../login/ilogin';
import {Observable} from 'rxjs';
import {Itipocargue} from '../itipocargue';
import {ICargue} from '../icargue';
import {IArchivo} from '../iarchivo';
import {ICambiarEstado} from '../icambiar-estado';
import { IConsolidado } from '../iconsolidado';
import { IDetallado } from '../idetallado';
import { Iimpresionpdf } from '../Iimpresionpdf';
import { ICambiarEstadoRechazada } from '../icambiar-estado-reachazada';

export abstract class ArchivoGateway {

  abstract GetPfd(id: any,tipo: string): Observable<Iimpresionpdf[]>;
  abstract TipoCargue(): Observable<Itipocargue[]>;
  abstract Listar(idOrganizacion: any): Observable<ICargue[]>;
  abstract ListarCertificaciones(idCargue: any): Observable<any>;
  abstract ListarCertificacionesSinCargue(idTipoCargue: any, idOrganizacion: any): Observable<any>;
  abstract CarguesXEstado(estado: any): Observable<ICargue[]>;
  abstract Cargues(): Observable<ICargue[]>;
  abstract CarguesFilter(dataQuery): Observable<ICargue[]>;
  abstract CarguesSebraFilterAutorizacion(dataQuery): Observable<ICargue[]>;
  abstract CarguesSebra(): Observable<ICargue[]>;
  abstract CarguesSebraFilter(dataQuery): Observable<any>;
  abstract Cargar(data: IArchivo): Observable<any>;
  abstract LogCargue(idCargue): Observable<any>;
  abstract LogCargueDescarga(idCargue): Observable<any>;
  abstract CambiarEstadoCargue(data: ICambiarEstado): Observable<any>;
  abstract ActualizarVbno(idCargue: string, tipousuario: string): Observable<any>;
  abstract ActualizarVbnoOrden(idCargue: string, tipousuario: string,idUsuario:string): Observable<any>;
  abstract RegistrarActualizarDatosOrdenTesoreroReintegro(dato: any): Observable<any>;
  abstract ActualizarDatosOrdenCumplimientoReintegroTesoreroSebra(dato: any): Observable<any>;
  abstract RegistrarActualizarDatosOrdenTesoreroTraslado(dato: any): Observable<any>;
  abstract RegistrarActualizarDatosOrdenSebra(idCargue: string, idUsuario: string,nroperacioncud: string,observacion: string): Observable<any>;
  abstract RegistrarActualizarDatosOrdenSebraTodos(idUsuario: string,nroperacioncud: string,observacion: string): Observable<any>;
  abstract ActualizarVbnoOrdenTodos(idUsuario:string): Observable<any>;
  abstract CambiarEstadoCargueRechazada(data: ICambiarEstadoRechazada): Observable<any>;
  abstract GetConsolidado(tipoArchivo: string, estado: string, entidad: string, fechaInicial: string,fechaFinal: string): Observable<IConsolidado[]>;
  abstract GetConsolidadoXEntidad(tipoArchivo: string, estado: string, entidadId: string): Observable<IConsolidado[]>;
  abstract GetConsolidadoXFechaCargue(tipoArchivo: string, estado: string, fechaInicio: string, fechaFin: string): Observable<IConsolidado[]>;
  abstract GetDetallado(entidad: string, tipoArchivo: string, fechaInicial: string,fechaFinal: string): Observable<IDetallado[]>;
  abstract GetDetalladoFilter(dataQuery): Observable<any>;
  abstract GetConsolidadoFilter(dataQuery): Observable<any>;
  abstract GetObtenerOrdenCumplimientoIdCargue(idCargue: string): Observable<any>;
  abstract GetCargueFilter(dataQuery): Observable<any>;
  abstract GetTipoArchivosSinCargue(dataQuery): Observable<any>;
  abstract GetCargueCertificadosFilter(dataQuery): Observable<any>;
  abstract CargarCertificado(data: any): Observable<any>;
  abstract CargarCertificadoSinCargue(data: any): Observable<any>;
  abstract ActualizarCertificacion(data: any): Observable<any>;

}
