import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Aerolinea } from '../../../models/aerolinea/aerolinea.model';
import { AerolineaService } from '../../../services/aerolinea.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  columnas: string[] = ['Id', 'Nombre', 'Nit', 'Codigo', 'Acciones'];
  misAerolineas: Aerolinea[] = [];

  constructor(private miServicioAerolinea: AerolineaService,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  crear(): void {
    this.router.navigate(['/pages/aerolineas/crear']);
  }

  editar(id: number): void {
    this.router.navigate(['/pages/aerolineas/actualizar/' + id]);
  }

  listar() {
    this.miServicioAerolinea.index().subscribe((data) => {
      this.misAerolineas = data;
    });
  }

  eliminar(id: number) {
    Swal.fire({
      title: 'Eliminar aerolinea',
      text: "¿Está seguro de eliminar esta aerolinea?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioAerolinea.destroy(id).subscribe(data => {
          Swal.fire(
            'Eliminado!',
            'La aerolinea ha sido eliminada.',
            'success'
          )
          this.ngOnInit();
        });
      }
    })
  }


}
