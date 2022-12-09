import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Veterinario } from '../../../models/veterinario/veterinario.model';
import { VeterinarioService } from '../../../services/veterinario.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  columnas: string[] = ['Id', 'Nombre', 'Especialidad', 'Acciones'];
  misVeterinarios: Veterinario[] = [];

  constructor(private miServicioVeterinarios: VeterinarioService,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }
  crear(): void {
    this.router.navigate(['/pages/veterinarios/crear']);
  }

  editar(id: number): void {
    this.router.navigate(['/pages/veterinarios/actualizar/'+id]);
  }

  listar() {
    this.miServicioVeterinarios.index().subscribe((data) => {
      this.misVeterinarios = data;
    });
  }

  eliminar(id: number) {
    Swal.fire({
      title: 'Eliminar veterinario',
      text: "¿Está seguro de eliminar este veterinario?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioVeterinarios.destroy(id).subscribe(data => {
          Swal.fire(
            'Eliminado!',
            'El veterinario ha sido eliminado.',
            'success'
          )
          this.ngOnInit();
        });
      }
    })
  }

}
