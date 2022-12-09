import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Permiso } from '../../../models/permiso/permiso.model';
import { PermisoService } from '../../../services/permiso.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  columnas: string[] = ["Id", "URL", "Método", "Acciones"];
  misPermisos: Permiso[] = [];

  constructor(private miServicioPermisos: PermisoService,
    private router: Router) { }

  ngOnInit(): void {
    this.listar()
  }

  crear(): void {
    this.router.navigate(['/pages/permisos/crear']);
  }

  editar(id: number): void {
    this.router.navigate(['/pages/permisos/actualizar/'+id]);
  }

  listar() {
    this.miServicioPermisos.index().subscribe((data) => {
      this.misPermisos = data;
    });
  }

  eliminar(id: number) {
    Swal.fire({
      title: 'Eliminar Permiso',
      text: "¿Está seguro de eliminar este permiso?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioPermisos.destroy(id).subscribe(data => {
          Swal.fire(
            'Eliminado!',
            'El permiso ha sido eliminado.',
            'success'
          )
          this.ngOnInit();
        });
      }
    })
  }

}
