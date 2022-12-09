import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Guacal } from '../../../models/guacal/guacal.model';
import { GuacalService } from '../../../services/guacal.service';
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
  guacal: Guacal = {
    tamano: "",
    estado: ""
  }
  estados=["Reservado", "Disponible", "En reparacion"];
  tamanos=["S", "M", "L", "XL"];
  constructor(
    private miServicioUsuarios: UsuarioService,
    private rutaActiva: ActivatedRoute,
    private router: Router,
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
   
  }
  getUsuario(id: number) {
    this.miServicioUsuarios.show(id).subscribe(data => {
     
      this.id_usuario = data.id;
    });
  }
  crear(): void {
  // this.guacal.
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioGuacales.store(this.guacal).subscribe(data => {
        Swal.fire(
          'Creado!',
          'El guacal ha sido creado.',
          'success'
        )
        this.router.navigate(['/pages/guacales/listar']);
      });
    }
  }

  actualizar() {
    //this.guacal.id_rol = this.idRolSeleccionado;
    if (this.validarDatosCompletos()) {
      this.miServicioGuacales.update(this.guacal).subscribe(data => {
        Swal.fire(
          'Actualizado!',
          'El guacal ha sido actualizado.',
          'success'
        )
        this.router.navigate(['/pages/guacals/listar']);
      });
    }
  }

  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.guacal.tamano == "" ||
      this.guacal.estado == "" ) {
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
