import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Mascota } from '../../../models/mascota/mascota.model';
import { MascotaService } from '../../../services/mascota.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  columnas: string[] = ['Id', 'Nombre', 'Especie', 'Peso', 'Estatura'];
  misMascotas: Mascota[] = [];
  constructor(
    private miServicioMascotas: MascotaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listar();
  }
  crear(): void {
    this.router.navigate(['/pages/mascotas/crear']);
  }

  editar(id: number): void {
    this.router.navigate(['/pages/mascotas/actualizar/'+id]);
  }

  listar() {
    this.miServicioMascotas.index().subscribe((data) => {
      this.misMascotas = data;
    });
  }

  eliminar(id: number) {
    Swal.fire({
      title: 'Eliminar mascota',
      text: "¿Está seguro de eliminar esta mascota?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioMascotas.destroy(id).subscribe(data => {
          Swal.fire(
            'Eliminado!',
            'La mascota ha sido eliminada.',
            'success'
          )
          this.ngOnInit();
        });
      }
    })
  }



}
