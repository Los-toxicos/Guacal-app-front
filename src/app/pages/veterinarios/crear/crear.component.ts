import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Veterinario } from '../../../models/veterinario/veterinario.model';
import { UsuarioService } from '../../../services/usuario.service';
import { VeterinarioService } from '../../../services/veterinario.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = true;
  id_usuario: number = 0;
  intentoEnvio: boolean = false;
  veterinario: Veterinario = {
    nombre: "",
    especialidad: ""
  }
  idRolSeleccionado: number;
  constructor(private miServicioVeterinarios: VeterinarioService,
    private miServicioUsuarios: UsuarioService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

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
      
      this.idRolSeleccionado = data.id_rol;
    });
  }
  crear(): void {
    //this.usuario.id_rol = this.idRolSeleccionado;

    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioVeterinarios.store(this.veterinario).subscribe(data => {
        Swal.fire(
          'Creado!',
          'El veterinario ha sido creado.',
          'success'
        )
        this.router.navigate(['/pages/veterinarios/listar']);
      });
    }
  }

  actualizar() {
   // this.veterinario.id_rol = this.idRolSeleccionado;
    if (this.validarDatosCompletos()) {
      this.miServicioVeterinarios.update(this.veterinario.id,this.veterinario).subscribe(data => {
        Swal.fire(
          'Actualizado!',
          'El veterinario ha sido actualizado.',
          'success'
        )
        this.router.navigate(['/pages/veterinarios/listar']);
      });
    }
  }

  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.veterinario.nombre == "" ||
      this.veterinario.especialidad == "" ) {
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
