import { Injectable } from '@angular/core';
import { ArchivoGateway } from '../../models/archivo/gateway/archivo-gateway';
import { Observable } from 'rxjs';
import { Itipocargue } from '../../models/archivo/itipocargue';
import { ICargue } from '../../models/archivo/icargue';
import { IArchivo } from '../../models/archivo/iarchivo';
import { ICambiarEstado } from '../../models/archivo/icambiar-estado';
import { IConsolidado } from '../../models/archivo/iconsolidado';

@Injectable({
  providedIn: 'root',
})
export class GetArchivoUseCaseService {
  constructor(private _archivoGetway: ArchivoGateway) {}
  
  TipoCargue(): Observable<Itipocargue[]> {
    return this._archivoGetway.TipoCargue();
  }
  Listar(idOrganizacion: any): Observable<ICargue[]> {
    return this._archivoGetway.Listar(idOrganizacion);
  }
  CarguesXEstado(estado: string): Observable<ICargue[]> {
    return this._archivoGetway.CarguesXEstado(estado);
  } 
  Cargar(data: IArchivo): Observable<any> {
    return this._archivoGetway.Cargar(data);
  }
  LogCargue(idCargue): Observable<any> {
    return this._archivoGetway.LogCargue(idCargue);
  }
  CambiarEstadoCargue(data: ICambiarEstado): Observable<any> {
    return this._archivoGetway.CambiarEstadoCargue(data);
  }

  GetConsolidado(tipoArchivo: string, estado: string): Observable<IConsolidado[]>{
    return this._archivoGetway.GetConsolidado(tipoArchivo, estado);
  }
}
