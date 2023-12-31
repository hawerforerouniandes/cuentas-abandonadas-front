import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetEntidadUseCaseService } from 'src/app/domain/usecases/entidad/get-entidad-use-case.service';
import { GetSubastaService } from 'src/app/domain/usecases/subasta/subasta.service';
import { SweetAlertService } from 'src/app/infraestructure/sweet-alert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-adjudicacion',
  templateUrl: './registrar-adjudicacion.component.html',
  styleUrls: ['./registrar-adjudicacion.component.css'],
  providers: [DatePipe]
})
export class RegistrarAdjudicacionComponent implements OnInit {

  adjudicacionForm: FormGroup;
  entidades:any;
  tipos:any;
  public idvalor: number;
  public id: number;
  public valorsubasta: number;
  public title: string;

  constructor(private _entidadUseCase: GetEntidadUseCaseService,
              private alarma: SweetAlertService,
              private route: ActivatedRoute,
              private _servicioSubasta: GetSubastaService,
              private _router : Router,
              private miDatePipe: DatePipe) { 

    this._entidadUseCase.ListadoEntidades().subscribe(ResulData => {
      this.entidades = ResulData;
    });

    this.llenartipo();

    this.formInit();
  }

  ngOnInit(): void {
    this.title="Cuentas abandonadas - Registro de adjudicación de subasta";
    this.id = this.route.snapshot.params['id'];
    this.idvalor = this.route.snapshot.params['idvalor'];
    this.valorsubasta = this.route.snapshot.params['valorsubasta'];

    if(this.id !=0){

      this.title="Cuentas abandonadas - Actualizar adjudicación de subasta";

      Swal.fire({
        title: 'Espere por favor, Consultando Datos de la adjudicación',
        allowOutsideClick:false,
        didOpen: () => {
          Swal.showLoading()
        }
      });

      this._servicioSubasta.ListarAdjudicacionesIdAdjudicacion(this.id).subscribe((ResponseData) => {

        const fechaAdjudicacion = this.miDatePipe.transform(ResponseData.fechaAdjudicacion, 'yyyy-MM-dd');

        this.adjudicacionForm.controls["entidad"].setValue(ResponseData.idOrganizacion);
        this.adjudicacionForm.controls["fechaadjudicacion"].setValue(fechaAdjudicacion);
        this.adjudicacionForm.controls["tipo"].setValue(ResponseData.tipo);
        this.adjudicacionForm.controls["valoradjudicado"].setValue(ResponseData.valorAdjudicacion);

        if(ResponseData.tipo == 'Liquidez')
        {
          this.adjudicacionForm.controls["porcentaje"].setValue(20);
        }
        else{
          this.adjudicacionForm.controls["porcentaje"].setValue(ResponseData.porcentaje);
        }
       
        this.adjudicacionForm.controls["tasainteres"].setValue(ResponseData.tasaInteres);

        console.log(ResponseData);


        Swal.close()
      },  (error: any)  => {
        console.log(error);
        Swal.close();
        this.alarma.showError(error);
        
      });

    }

  }

  formInit(){

    this.adjudicacionForm = new FormGroup({
      fechaadjudicacion: new FormControl('', [Validators.required]),
      entidad: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
      valoradjudicado: new FormControl('', [Validators.required]),
      porcentaje: new FormControl('', [Validators.required]),
      tasainteres: new FormControl('', [Validators.required]),
      });
  }

  llenartipo(){
    this.tipos = [
      {
        nombre:"Liquidez (3 meses)",
        id: "Liquidez"
      },
      {
        nombre:"Largo Plazo (1 año)",
        id: "Largo plazo"
      }
    ]
  }


  validar(event){

    if(event == 'Liquidez')
    {
      this.adjudicacionForm.get("porcentaje").disable();
      this.adjudicacionForm.controls["porcentaje"].setValue(20);
    }else{
      this.adjudicacionForm.get("porcentaje").enable();
      this.adjudicacionForm.controls["porcentaje"].setValue('');

    }
   
  }

  onSubmit(){
    if (!this.adjudicacionForm.invalid) {

      var porcentaje2;

      const{fechaadjudicacion,entidad,tipo,valoradjudicado,porcentaje,tasainteres} = this.adjudicacionForm.value;

      // if(porcentaje.toString().length > 3)
      // {
      //   this.alarma.showInfo("El campo porcentaje no debe ser mayor a 3 caracteres");
      //   return;
      // }

      debugger;

      if(tipo == "Liquidez")
      {
        porcentaje2 = 20;
      }else{
        porcentaje2 = porcentaje
      }

      if(porcentaje < 0)
      {
        this.alarma.showError("El valor del porcentaje no puede ser negativo");
        return;
      }

      if(porcentaje > 100)
      {
        this.alarma.showError("El valor del porcentaje no debe ser mayor al 100%");
        return;
      }

      // if(tasainteres.toString().length > 3)
      // {
      //   this.alarma.showInfo("El campo tasa de interes no debe ser mayor a 3 caracteres");
      //   return;
      // }

      if(tasainteres < 0)
      {
        this.alarma.showError("El valor de la tasa de interes no puede ser negativo");
        return;
      }

      if(tasainteres > 100)
      {
        this.alarma.showError("El valor de la tasa de interes no debe ser mayor al 100%");
        return;
      }
      
      if(valoradjudicado < 0)
      {
        this.alarma.showError("El valor adjudicado no puede ser negativo");
        return;
      }

      // if(valoradjudicado.toString().length > 15)
      // {
      //   this.alarma.showInfo("El campo Valor adjudicado no debe ser mayor a 15 caracteres y es requerido");
      //   return;
      // }

      const data:any = {
        idAdjudicacion: this.id,
        fechaAdjudicacion: fechaadjudicacion,
        valorAdjudicacion:valoradjudicado,
        porcentaje:porcentaje2,
        tasaInteres:tasainteres,
        tipo:tipo,
        idOrganizacion:entidad,
        idValor:this.idvalor
      };


      Swal.fire({
        title: 'Espere por favor, Registrando la adjudicación',
        allowOutsideClick:false,
        didOpen: () => {
            Swal.showLoading()
          }
        });

      this._servicioSubasta.InsertarActualizarAdjudicacion(data).subscribe((ResponseData) => {
        Swal.close()
        this.alarma.showSuccess("Registro exitosamente");
        this._router.navigate([`/listaradjudicacionsubasta`,this.idvalor,this.valorsubasta]);
        
      },  (error: any)  => {
        console.log(error);
        Swal.close();
        this.alarma.showError(error.error.mensaje);
        
      });

    }
    else{
      this.alarma.showWarning("Información incompleta, por favor verifique");
    }

  }

  regresar(){
    this._router.navigate([`/listaradjudicacionsubasta`,this.idvalor,this.valorsubasta]);
  }

}
