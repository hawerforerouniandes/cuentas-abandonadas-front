import { InterfazContableList } from './../../../domain/models/interfaz-contable/interfaz-contable-list';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Itipocargue} from '../../../domain/models/archivo/itipocargue';
import {ICargue} from '../../../domain/models/archivo/icargue';
import {IArchivo} from '../../../domain/models/archivo/iarchivo';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {toFormData} from '../../../domain/models/archivo/toFormData';
import {ICambiarEstado} from '../../../domain/models/archivo/icambiar-estado';
import { InterfazContable } from 'src/app/domain/models/interfaz-contable/interfaz-contable';

@Injectable({
  providedIn: 'root'
})
export class InterfazContableService {
  private _url: string = `${environment.rest.endpoint}/Interfaz`;
  private _httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Disposition': 'multipart/form-data'
      },
    )
  };

  constructor(private http: HttpClient) {
  }

  ListarInterfazContable(): Observable<InterfazContableList[]> {
    return this.http.get<InterfazContableList[]>(`${this._url}/ConsultarRegistrosInterfaz`);
  }

  CrearInterfazContable(data: InterfazContable): Observable<any> {
    return this.http.post<any>(`${this._url}/Generar`, data , this._httpOptions);
  }

  TrasmitirInterfazContable(data: InterfazContableList): Observable<any> {
    const dataToSend = {
      "nmAnoInt": "20" + data.anoproceso,
      "nmMesInt": data.mesproceso,
      "nmNroPro": data.nroprocesoborrador
    }
    console.log("se envía esto", dataToSend);
    return this.http.post<any>(`${this._url}/Transmitir`, dataToSend , this._httpOptions);
  }
}
