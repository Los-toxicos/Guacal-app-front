import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Aerolinea } from '../../../models/aerolinea/aerolinea.model';
import { AerolineaService } from '../../../services/aerolinea.service';
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
  aerolinea: Aerolinea = {
    nombre: "",
    nit: "",
    codigo: "",
  }
  idRolSeleccionado: number;
  constructor(
    private miServicioUsuarios: UsuarioService,
    private rutaActiva: ActivatedRoute,
    private router: Router,
    private miServicioAerolinea: AerolineaService
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
      this.idRolSeleccionado = data.id_rol;
    });
  }
  crear(): void {
   // this.usuario.id_rol = this.idRolSeleccionado;

    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioAerolinea.store(this.aerolinea).subscribe(data => {
        Swal.fire(
          'Creado!',
          'El aerolinea ha sido creado.',
          'success'
        )
        this.router.navigate(['/pages/aerolineas/listar']);
      });
    }
  }

  actualizar() {
   // this.aerolinea.id_rol = this.idRolSeleccionado;
    if (this.validarDatosCompletos()) {
      this.miServicioAerolinea.update(this.aerolinea.id,this.aerolinea).subscribe(data => {
        Swal.fire(
          'Actualizado!',
          'El aerolinea ha sido actualizado.',
          'success'
        )
        this.router.navigate(['/pages/aerolineas/listar']);
      });
    }
  }

  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.aerolinea.nombre == "" ||
      this.aerolinea.codigo == "" ||
      this.aerolinea.nit == "") {
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
