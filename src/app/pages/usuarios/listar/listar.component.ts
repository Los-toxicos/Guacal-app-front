import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import Swal from 'sweetalert2';
import { Usuario } from '../../../models/usuario/usuario.model';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  columnas: string[] = ['Id', 'Nombre', 'Correo', 'Rol', 'Opciones'];
  misUsuarios: Usuario[] = [];

  constructor(private miServicioUsuarios: UsuarioService) { }

  ngOnInit(): void {
    this.index();
  }

  index() {
    this.miServicioUsuarios.index().subscribe((usuarios: Usuario[]) => {
      this.misUsuarios = usuarios;
    });
  }

  destroy(id: number) {
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
