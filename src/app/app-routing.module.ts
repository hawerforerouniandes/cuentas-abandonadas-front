import { ConsolidadosComponent } from './presentation/app/pages/consolidados/consolidados.component';
import { DetalladosComponent } from './presentation/app/pages/detallados/detallados.component';
import { EditarCalendarioComponent } from './presentation/app/pages/calendario/editar/editar.component';
import { AutorizacionCarguesComponent } from './presentation/app/pages/autorizacion-cargues/autorizacion-cargues.component';
import { ListarInterfazContableComponent } from './presentation/app/pages/interfaz-contable/listar/listar.component';
import { CrearInterfazContableComponent } from './presentation/app/pages/interfaz-contable/crear/crear.component';
import { EntidadFinancieraComponent } from './presentation/app/pages/entidad-financiera/entidad-financiera.component';
import { SubMenuOrganismComponent } from './presentation/app/organisms/sub-menu-organism/sub-menu-organism.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './presentation/shared/guards/auth.guard';
import {NotFoundComponent} from './presentation/shared/components/not-found/not-found.component';
import {ContainerComponent} from './presentation/app/pages/container/container.component';
import {LoginComponent} from './presentation/app/pages/login/login.component';
import {ListarComponent} from './presentation/app/pages/archivos/listar/listar.component';
import {CargarComponent} from './presentation/app/pages/archivos/cargar/cargar.component';
import {ProfileComponent} from './presentation/app/pages/profile/profile.component';
import { ListarCalendarioComponent } from './presentation/app/pages/calendario/listar/listar.component';
import { CrearCalendarioComponent } from './presentation/app/pages/calendario/crear/crear.component';
import { AutorizacionTrasladoPdfComponent } from './presentation/app/pages/autorizacion-traslado-pdf/autorizacion-traslado-pdf.component';
import { AutorizacionReintegroPdfComponent } from './presentation/app/pages/autorizacion-reintegro-pdf/autorizacion-reintegro-pdf.component';
import { EstadoCarguesComponent } from './presentation/app/pages/reportes/estado-cargues/estado-cargues.component';
import { AutorizacionRechazoComponent } from './presentation/app/pages/autorizacion-rechazo/autorizacion-rechazo.component';
import { ListarFuncionariosComponent } from './presentation/app/pages/administrador/funcionarios/listar-funcionarios/listar-funcionarios.component';
import { FuncionarioRegistroComponent } from './presentation/app/pages/administrador/funcionarios/funcionario-registro/funcionario-registro.component';
import { ListarCargosComponent } from './presentation/app/pages/administrador/cargos/listar-cargos/listar-cargos.component';
import { CargoRegistroComponent } from './presentation/app/pages/administrador/cargos/cargo-registro/cargo-registro.component';
import { CertificadosComponent } from './presentation/app/pages/archivos/certificados/certificados.component';
import { CertificadosCargarComponent } from './presentation/app/pages/archivos/certificados-cargar/certificados-cargar.component';
import { ListarEntidadesComponent } from './presentation/app/pages/administrador/entidades/listar-entidades/listar-entidades.component';
import { EntidadRegistroComponent } from './presentation/app/pages/administrador/entidades/entidad-registro/entidad-registro.component';
import { CarguesRechazadosComponent } from './presentation/app/pages/reportes/cargues-rechazados/cargues-rechazados.component';
import { CertificacionSaldosComponent } from './presentation/app/pages/reportes/certificacion-saldos/certificacion-saldos.component';
import { ConsolidadoEntidadComponent } from './presentation/app/pages/reportes/consolidado-entidad/consolidado-entidad.component';
import { DatosReintegroTesoreroComponent } from './presentation/app/pages/autorizacionDatos/datos-reintegro-tesorero/datos-reintegro-tesorero.component';
import { DatosTrasladoTesoreroComponent } from './presentation/app/pages/autorizacionDatos/datos-traslado-tesorero/datos-traslado-tesorero.component';
import { DatosSebraComponent } from './presentation/app/pages/autorizacionDatos/datos-sebra/datos-sebra.component';
import { CambioContrasenaComponent } from './presentation/app/pages/administrador/cambio-contrasena/cambio-contrasena.component';
import { RecuperarContrasenaComponent } from './presentation/app/pages/administrador/recuperar-contrasena/recuperar-contrasena.component';
import { ListarValorComponent } from './presentation/app/pages/subasta/GenerarValor/listar-valor/listar-valor.component';
import { CalcularValorComponent } from './presentation/app/pages/subasta/GenerarValor/calcular-valor/calcular-valor.component';
import { ListarAdjudicacionComponent } from './presentation/app/pages/subasta/Adjudicacion/listar-adjudicacion/listar-adjudicacion.component';
import { RegistrarAdjudicacionComponent } from './presentation/app/pages/subasta/Adjudicacion/registrar-adjudicacion/registrar-adjudicacion.component';
import { ListarSubastaComponent } from './presentation/app/pages/subasta/Adjudicacion/listar-subasta/listar-subasta.component';
import { AdjudicacionSubastaComponent } from './presentation/app/pages/reportes/adjudicacion-subasta/adjudicacion-subasta.component';
import { RegistrarActualizarFuncionarioEntidadComponent } from './presentation/app/pages/administrador/recurso-humano-entidad/registrar-actualizar-funcionario-entidad/registrar-actualizar-funcionario-entidad.component';
import { EnvioCorreoLiderEntidadComponent } from './presentation/app/pages/administrador/recurso-humano-entidad/envio-correo-lider-entidad/envio-correo-lider-entidad.component';
import { ListarCorreoComponent } from './presentation/app/pages/administrador/recurso-humano-entidad/administrador-lider-entidad/listar-correo/listar-correo.component';
import { RechazarNotificacionComponent } from './presentation/app/pages/administrador/recurso-humano-entidad/administrador-lider-entidad/rechazar-notificacion/rechazar-notificacion.component';
import { DetalleTesoreroEntidadComponent } from './presentation/app/pages/administrador/recurso-humano-entidad/detalle-tesorero-entidad/detalle-tesorero-entidad.component';
import { AutorizacionOrdenesSebraComponent } from './presentation/app/pages/autorizacion-ordenes-sebra/autorizacion-ordenes-sebra.component';
import { CertificadosAprobadosComponent } from './presentation/app/pages/archivos/certificados-aprobados/certificados-aprobados.component';
import { DatosActualizacionReintegroTesoreroComponent } from './presentation/app/pages/autorizacionDatos/datos-actualizacion-reintegro-tesorero/datos-actualizacion-reintegro-tesorero.component';
import { CertificadosSinCargueComponent } from './presentation/app/pages/archivos/certificados-sin-cargue/certificados-sin-cargue.component';


const routes: Routes = [
  {path: 'recuperarcontrasena', component: RecuperarContrasenaComponent},
  {path: 'login', component: LoginComponent},
  {
    path: '',
    component: ContainerComponent,
    canActivate: [
      AuthGuard
    ],
    canActivateChild: [
      AuthGuard
    ],
    children: [
      {path: '', redirectTo: 'main', pathMatch: 'full'},
      {path: 'listar', component: ListarComponent},
      {path: 'certificados', component: CertificadosComponent},
      {path: 'certificados-aprobados', component: CertificadosAprobadosComponent},
      {path: 'certificados-cargar/:id', component: CertificadosCargarComponent},
      {path: 'certificados-sin-cargue/:id/:entidad', component: CertificadosSinCargueComponent},
      {path: 'cargar', component: CargarComponent},
      {path: 'perfil', component: ProfileComponent},
      {path: 'submenu/:type', component: SubMenuOrganismComponent},
      {path: 'entidad-financiera', component: ListarEntidadesComponent},
      {path: 'interfaz-contable-listar', component: ListarInterfazContableComponent},
      {path: 'interfaz-contable-crear', component: CrearInterfazContableComponent},
      {path: 'autorizacion-cargues', component: AutorizacionCarguesComponent},
      {path: 'autorizacion-traslado-pdf/:id/:vnotesorero/:vnosebra/:vnoadmin/:vnoaut', component: AutorizacionTrasladoPdfComponent},
      {path: 'autorizacion-reintegro-pdf/:id/:vnotesorero/:vnosebra/:vnoadmin/:vnoaut', component: AutorizacionReintegroPdfComponent},
      {path: 'autorizacion-rechazo/:id', component: AutorizacionRechazoComponent},
      {path: 'calendario', component: ListarCalendarioComponent},
      {path: 'calendario-crear', component: CrearCalendarioComponent},
      {path: 'calendario-editar/:id/:fechaDesde', component: EditarCalendarioComponent},
      {path: 'consolidado/:type', component: ConsolidadosComponent},
      {path: 'detallado/:type', component: DetalladosComponent},
      {path: 'reporteestadocargue', component: EstadoCarguesComponent},
      {path: 'funcionario', component: ListarFuncionariosComponent},
      {path: 'funcionarioRegistro/:id', component: FuncionarioRegistroComponent},
      {path: 'cargo', component: ListarCargosComponent},
      {path: 'cargoRegistro/:id', component: CargoRegistroComponent},
      {path: 'entidadRegistro/:id', component: EntidadRegistroComponent},
      {path: 'reportecarguerechazados', component: CarguesRechazadosComponent},
      {path: 'reportecertifiacionsaldos', component: CertificacionSaldosComponent},
      {path: 'consolidadoentidad', component: ConsolidadoEntidadComponent},
      {path: 'datos-reintegro-tesorero/:id', component: DatosReintegroTesoreroComponent},
      {path: 'datos-modificacion-reintegro-tesorero/:id', component: DatosActualizacionReintegroTesoreroComponent},
      {path: 'datos-traslados-tesorero/:id', component: DatosTrasladoTesoreroComponent},
      {path: 'datos-sebra/:id', component: DatosSebraComponent},
      {path: 'cambiocontrasena', component: CambioContrasenaComponent},
      {path: 'listarvalorsubasta', component: ListarValorComponent},
      {path: 'generarvalorsubasta', component: CalcularValorComponent},
      {path: 'listaradjudicacionsubasta/:id/:valorsubasta', component: ListarAdjudicacionComponent},
      {path: 'registraradjudicacionsubasta/:id/:idvalor/:valorsubasta', component: RegistrarAdjudicacionComponent},
      {path: 'listarsubasta', component: ListarSubastaComponent},
      {path: 'reporteadjudicacionsubasta', component: AdjudicacionSubastaComponent},
      {path: 'funcionarioEntidadRegistrarActualizar/:id/:tipo', component: RegistrarActualizarFuncionarioEntidadComponent},
      {path: 'envioCorreoLiderEntidad', component: EnvioCorreoLiderEntidadComponent},
      {path: 'listarCorreoLiderEntidad', component: ListarCorreoComponent},
      {path: 'autorizacion-rechazo-lider-entidad/:id/:usuario', component: RechazarNotificacionComponent},
      {path: 'visualizarentidadtesorero/:id', component: DetalleTesoreroEntidadComponent},
      {path: 'autorizacion-ordenes-sebra', component: AutorizacionOrdenesSebraComponent},
      //NotFound
      {path: '**', component: NotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
