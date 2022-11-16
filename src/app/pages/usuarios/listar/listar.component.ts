import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Usuario } from '../../../models/usuario/usuario.model';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  columnas: string[] = ['Id', 'Nombre', 'Correo', 'Rol', 'Opciones'];
  misUsuarios: Usuario[] = [];

  constructor(private miServicioUsuarios: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  crear(): void {
    this.router.navigate(['/pages/usuarios/crear']);
  }

  editar(id: number): void {
    this.router.navigate(['/pages/usuarios/actualizar/'+id]);
  }

  listar() {
    this.miServicioUsuarios.index().subscribe((data) => {
      this.misUsuarios = data;
    });
  }

  eliminar(id: number) {
    Swal.fire({
      title: 'Eliminar Usuario',
      text: "¿Está seguro de eliminar este usuario?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioUsuarios.destroy(id).subscribe(data => {
          Swal.fire(
            'Eliminado!',
            'El usuario ha sido eliminado.',
            'success'
          )
          this.ngOnInit();
        });
      }
    })
  }


}
