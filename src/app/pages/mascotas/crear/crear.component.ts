import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Guacal } from '../../../models/guacal/guacal.model';
import { Mascota } from '../../../models/mascota/mascota.model';
import { GuacalService } from '../../../services/guacal.service';
import { MascotaService } from '../../../services/mascota.service';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = true;
  id_usuario: number = 0;
  intentoEnvio: boolean = false;
  mascota: Mascota = {
    nombre: "",
    especie: "",
    peso: 0,
    estatura: 4,
    id_usuario: null,
    id_guacal:null
  }
  especies:["Felino", "Canino", "Otros"];
  guacales:Guacal[];
  constructor(
    private miServicioUsuarios: UsuarioService,
    private rutaActiva: ActivatedRoute,
    private router: Router,
    private miservicioMascotas: MascotaService,
    private miServicioGuacales: GuacalService
  ) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id) {
      this.modoCreacion = false;
      this.id_usuario = this.rutaActiva.snapshot.params.id;
      this.getUsuario(this.id_usuario)
    } else {
      this.modoCreacion = true;
    }
    this.getGuacales();
    
  }

  getGuacales(){
    this.miServicioGuacales.index().subscribe(
      data=>{
        this.guacales=data;
      }
    )
  }
  getUsuario(id: number) {
    this.miServicioUsuarios.show(id).subscribe(data => {
      
      this.mascota.id_usuario = data.id;
    });
  }


  crear(): void {
  

    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miservicioMascotas.store(this.mascota).subscribe(data => {
        Swal.fire(
          'Creado!',
          'La mascota ha sido creada.',
          'success'
        )
        this.router.navigate(['/pages/mascotas/listar']);
      });
    }
  }

  actualizar() {
   
    if (this.validarDatosCompletos()) {
      this.miservicioMascotas.update(this.mascota).subscribe(data => {
        Swal.fire(
          'Actualizado!',
          'El mascota ha sido actualizado.',
          'success'
        )
        this.router.navigate(['/pages/mascotas/listar']);
      });
    }
  }

  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.mascota.nombre == "" ||
      this.mascota.especie == "" ||
      this.mascota.peso <= 0 ||
      this.mascota.estatura <= 0) {
      Swal.fire(
        'Error!',
        'Debe completar todos los campos.',
        'error'
      )
      return false;
    } else {
      return true;
    }
  }
  }


