import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Vuelo } from '../../../models/vuelo/vuelo.model';
import { VueloService } from '../../../services/vuelo.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  columnas: string[] = ['Id', 'Fecha salida', 'Fecha llegada', 'Capacidad', 'Ruta', 'Aerolinea', 'Veterinario'];
  misVuelos: Vuelo[] = [];
  constructor(private miServicioVuelos: VueloService,
    private router: Router) { }

  ngOnInit(): void {
  }
  crear(): void {
    this.router.navigate(['/pages/vuelos/crear']);
  }

  editar(id: number): void {
    this.router.navigate(['/pages/vuelos/actualizar/'+id]);
  }

  listar() {
    this.miServicioVuelos.index().subscribe((data) => {
      this.misVuelos = data;
    });
  }

  eliminar(id: number) {
    Swal.fire({
      title: 'Eliminar Vuelo',
      text: "¿Está seguro de eliminar este Vuelo?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioVuelos.destroy(id).subscribe(data => {
          Swal.fire(
            'Eliminado!',
            'El Vuelo ha sido eliminado.',
            'success'
          )
          this.ngOnInit();
        });
      }
    })
  }

}
