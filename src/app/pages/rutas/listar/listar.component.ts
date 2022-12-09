import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Ruta } from '../../../models/ruta/ruta.model';
import { RutaService } from '../../../services/ruta.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  columnas: string[] = ['Id', 'Origen', 'Destino', 'Acciones'];
  misRutas: Ruta[] = [];

  constructor(private miServicioRutas: RutaService,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  crear(): void {
    this.router.navigate(['/pages/rutas/crear']);
  }

  editar(id: number): void {
    this.router.navigate(['/pages/rutas/actualizar/' + id]);
  }

  listar() {
    this.miServicioRutas.index().subscribe((data) => {
      this.misRutas = data;
    });
  }

  eliminar(id: number) {
    Swal.fire({
      title: 'Eliminar ruta',
      text: "¿Está seguro de eliminar este ruta?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioRutas.destroy(id).subscribe(data => {
          Swal.fire(
            'Eliminado!',
            'La ruta ha sido eliminada.',
            'success'
          )
          this.ngOnInit();
        });
      }
    })
  }

}
