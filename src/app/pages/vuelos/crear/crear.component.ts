import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Aerolinea } from '../../../models/aerolinea/aerolinea.model';
import { Rol } from '../../../models/rol/rol.model';
import { Ruta } from '../../../models/ruta/ruta.model';
import { Usuario } from '../../../models/usuario/usuario.model';
import { Veterinario } from '../../../models/veterinario/veterinario.model';
import { Vuelo } from '../../../models/vuelo/vuelo.model';
import { AerolineaService } from '../../../services/aerolinea.service';
import { RolService } from '../../../services/rol.service';
import { RutaService } from '../../../services/ruta.service';
import { UsuarioService } from '../../../services/usuario.service';
import { VeterinarioService } from '../../../services/veterinario.service';
import { VueloService } from '../../../services/vuelo.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  modoCreacion: boolean = true;
  id_usuario: number = 0;
  intentoEnvio: boolean = false;
  vuelo: Vuelo = {
    id: 0,
    hora_salida: "",
    hora_llegada: "",
    capacidad: 0,
    id_ruta: 0,
    id_aerolinea: 0,
    id_veterinario: 0,
  }
  usuario: Usuario = {
    nombre: "",
    correo: "",
    contrasena: "",
    id_rol: 4
  }
  roles: Rol[];
  rutas: Ruta[];
  aerolineas: Aerolinea[];
  veterinarios: Veterinario[];
  idVueloSeleccionado: number;
  idRolSeleccionado:number;
  constructor(
    private miServicioUsuarios: UsuarioService,
    private miServicioVuelos: VueloService,
    private rutaActiva: ActivatedRoute,
    private router: Router,
    private miServicioRoles: RolService, 
    private miServicioRutas: RutaService,
    private miServicioAerolineas: AerolineaService,
    private miServicioVeterinarios: VeterinarioService

    ) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id) {
      this.modoCreacion = false;
      this.id_usuario = this.rutaActiva.snapshot.params.id;
      this.getUsuario(this.id_usuario)
    } else {
      this.modoCreacion = true;
    }
    this.getRoles();
    this.getAerolineas();
    this.getRutas();
    this.getVeterinarios();

  }
  
  getRoles() {
    this.miServicioRoles.index().subscribe(data => {
      this.roles = data;
    });
  }
  getRutas() {
    this.miServicioRutas.index().subscribe(data => {
      this.rutas = data;
    });
  }
  getAerolineas() {
    this.miServicioAerolineas.index().subscribe(data => {
      this.aerolineas = data;
    });
  }
  getVeterinarios() {
    this.miServicioAerolineas.index().subscribe(data => {
      this.aerolineas = data;
    });
  }

  getUsuario(id: number) {
    this.miServicioUsuarios.show(id).subscribe(data => {
      this.usuario = data;
      this.idRolSeleccionado = this.usuario.id_rol;
    });
  }
  getVuelo(id: number) {
    this.miServicioVuelos.show(id).subscribe(data => {
      this.vuelo = data;
      this.idVueloSeleccionado = this.vuelo.id;
    });}

  crear(): void {
    this.usuario.id_rol = this.idRolSeleccionado;
    if (this.validarDatosCompletos()) {
      this.miServicioVuelos.store(this.vuelo).subscribe(data=>{
        Swal.fire(
          'Creado!',
          'El vuelo ha sido creado.',
          'success'
        )
        this.router.navigate(['/pages/vuelos/listar']);
      });
    }
  }

  actualizar() {
    this.vuelo.id = this.idVueloSeleccionado;
    if (this.validarDatosCompletos()) {
      this.miServicioVuelos.update(this.vuelo.id, this.vuelo ).subscribe(data => {
        Swal.fire(
          'Actualizado!',
          'El vuelo ha sido actualizado.',
          'success'
        )
        this.router.navigate(['/pages/vuelos/listar']);
      });
    }
  }

  eliminar()
{
  this.miServicioVuelos.destroy(this.idVueloSeleccionado).subscribe(
    data=>{
      console.log(data);
    }
  )
} 

validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.vuelo.capacidad <= 0 ||
      this.vuelo.hora_salida == "" ||
      this.vuelo.hora_llegada == "") {
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
