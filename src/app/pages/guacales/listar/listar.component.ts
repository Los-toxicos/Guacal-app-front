import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Guacal } from '../../../models/guacal/guacal.model';
import { GuacalService } from '../../../services/guacal.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  columnas: string[] = ['Id', 'Tamaño', 'Estado', 'Id mascota', 'Acciones'];
  misGuacales: Guacal[] = [];
  constructor(
    private miServicioGuacales: GuacalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listar();
  }
  crear(): void {
    this.router.navigate(['/pages/guacales/crear']);
  }

  editar(id: number): void {
    this.router.navigate(['/pages/guacales/actualizar/' + id]);
  }

  listar() {
    this.miServicioGuacales.index().subscribe((data) => {
      this.misGuacales = data;
    });
  }

  eliminar(id: number) {
    Swal.fire({
      title: 'Eliminar guacal',
      text: "¿Está seguro de eliminar este guacal?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioGuacales.destroy(id).subscribe(data => {
          Swal.fire(
            'Eliminado!',
            'El guacal ha sido eliminado.',
            'success'
          )
          this.ngOnInit();
        });
      }
    })
  }


}
