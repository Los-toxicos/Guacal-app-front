import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Permiso } from '../../../models/permiso/permiso.model';
import { PermisoService } from '../../../services/permiso.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  modoCreacion: boolean = true;
  id_permiso: number = 0;
  intentoEnvio: boolean = false;
  permiso: Permiso = {
    url: "",
    metodo: "",  
  }
  metodos: string[] = ["GET", "POST", "PUT", "DELETE"];
  
  constructor(private miServicioPermisos: PermisoService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id) {
      this.modoCreacion = false;
      this.id_permiso = this.rutaActiva.snapshot.params.id;
      this.getPermiso(this.id_permiso)
    } else {
      this.modoCreacion = true;
    }    
  }

  getPermiso(id: number) {
    this.miServicioPermisos.show(id).subscribe(data => {
      this.permiso = data;            
    });
  }

  crear(): void {    

    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioPermisos.store(this.permiso).subscribe(data => {
        Swal.fire(
          'Creado!',
          'El permiso ha sido creado.',
          'success'
        )
        this.router.navigate(['/pages/permisos/listar']);
      });
    }
  }

  actualizar() {    
    if (this.validarDatosCompletos()) {
      this.miServicioPermisos.update(this.permiso).subscribe(data => {
        Swal.fire(
          'Actualizado!',
          'El permiso ha sido actualizado.',
          'success'
        )
        this.router.navigate(['/pages/permisos/listar']);
      });
    }
  }

  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.permiso.url == "" ||
      this.permiso.metodo == "" ) {
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
