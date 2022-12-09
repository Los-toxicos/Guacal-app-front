import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rol } from '../../../models/rol/rol.model';
import { RolService } from '../../../services/rol.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  columnas: string[] = ['Id', 'Nombre', 'Acciones'];
  misRoles: Rol[] = [];

  constructor(private miServicioRoles: RolService,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  crear(): void {
    this.router.navigate(['/pages/roles/crear']);
  }

  editar(id: number): void {
    this.router.navigate(['/pages/roles/actualizar/' + id]);
  }

  listar() {
    this.miServicioRoles.index().subscribe((data) => {
      this.misRoles = data;
    });
  }

  eliminar(id: number) {
    Swal.fire({
      title: 'Eliminar Rol',
      text: "¿Está seguro de eliminar este rol?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioRoles.destroy(id).subscribe(data => {
          Swal.fire(
            'Eliminado!',
            'El rol ha sido eliminado.',
            'success'
          )
          this.ngOnInit();
        });
      }
    })
  }

}
