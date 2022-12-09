import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Aerolinea } from '../../../models/aerolinea/aerolinea.model';
import { Ruta } from '../../../models/ruta/ruta.model';
import { Veterinario } from '../../../models/veterinario/veterinario.model';
import { Vuelo } from '../../../models/vuelo/vuelo.model';
import { AerolineaService } from '../../../services/aerolinea.service';
import { RutaService } from '../../../services/ruta.service';
import { VeterinarioService } from '../../../services/veterinario.service';
import { VueloService } from '../../../services/vuelo.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  columnas: string[] = ['Id', 'Fecha salida', 'Fecha llegada', 'Capacidad', 'Ruta', 'Aerolinea', 'Veterinario', 'Acciones'];
  misVuelos: Vuelo[] = [];
  rutas: Ruta[] = [];
  aerolineas: Aerolinea[] = [];
  veterinarios: Veterinario[] = [];

  constructor(private miServicioVuelos: VueloService,
    private miServicioRutas: RutaService,
    private miServicioAerolineas: AerolineaService,
    private miServicioVeterinarios: VeterinarioService,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  getRutas() {
    this.miServicioRutas.index().subscribe(data => {
      this.rutas = data;
    });
  }
  getAerolineas() {
    this.miServicioAerolineas.index().subscribe(data => {
      this.aerolineas = data;
    });
  }
  getVeterinarios(id) {
    this.miServicioVeterinarios.show(id).subscribe(data => {          
    });
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
