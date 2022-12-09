import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RolService } from '../../../services/rol.service';
import { Rol } from '../../../models/rol/rol.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = true;
  id_rol: number = 0;
  intentoEnvio: boolean = false;
  rol: Rol = {
    nombre: ""
  }

  constructor(private miServicioRoles: RolService,
    private rutaActiva: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id) {
      this.modoCreacion = false;
      this.id_rol = this.rutaActiva.snapshot.params.id;
      this.getRol(this.id_rol)
    } else {
      this.modoCreacion = true;
    } 
  }
  getRol(id: number) {
    this.miServicioRoles.show(id).subscribe(data => {
      this.rol = data;            
    });
  }

  crear(): void {


    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioRoles.store(this.rol).subscribe(data => {
        Swal.fire(
          'Creado!',
          'El rol ha sido creado.',
          'success'
        )
        this.router.navigate(['/pages/roles/listar']);
      });
    }
  }

  actualizar() {
    
    if (this.validarDatosCompletos()) {
      this.miServicioRoles.update(this.rol).subscribe(data => {
        Swal.fire(
          'Actualizado!',
          'El rol ha sido actualizado.',
          'success'
        )
        this.router.navigate(['/pages/roles/listar']);
      });
    }
  }

  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.rol.nombre == "" ) {
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
