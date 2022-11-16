import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../models/usuario/usuario.model';
import { UsuarioService } from '../../../services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  modoCreacion: boolean = true;
  id_usuario: number = 0;
  intentoEnvio: boolean = false;
  usuario: Usuario = {
    nombre: "",
    correo: "",
    contrasena: "",
    id_rol: 4

  }
  constructor(private miServicioUsuarios: UsuarioService,
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
      console.log(data);

      this.usuario = data;
    });
  }

  crear(): void {    
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioUsuarios.store(this.usuario).subscribe(data => {
        Swal.fire(
          'Creado!',
          'El usuario ha sido creado.',
          'success'
        )
        this.router.navigate(['/pages/usuarios/listar']);
      });
    }
  }

  actualizar() {
    if (this.validarDatosCompletos()) {
      this.miServicioUsuarios.update(this.usuario).subscribe(data => {
        Swal.fire(
          'Actualizado!',
          'El usuario ha sido actualizado.',
          'success'
        )
        this.router.navigate(['/pages/usuarios/listar']);
      });
    }
  }

  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.usuario.nombre == "" ||
      this.usuario.correo == "" ||
      this.usuario.contrasena == "") {
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