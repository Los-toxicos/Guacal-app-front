import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Ruta } from '../../../models/ruta/ruta.model';
import { RutaService } from '../../../services/ruta.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = true;
  id_usuario: number = 0;
  intentoEnvio: boolean = false;
  ruta: Ruta = {
    origen:"",
    destino:""
  }
  idRutaSeleccionada:number;
  ciudades=["Bogota", "Medellin", "Cali", "Pereira", "Cartagena", "Barranquilla",
  "Santa Marta", "Manizales", "Pasto", "Quibdo", "La guajira", "Villavicencio", 
  "Cucutá", "Bucaramanga", "Ibagué"
]
  constructor( private miServicioRutas: RutaService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id) {
      this.modoCreacion = false;
      this.id_usuario = this.rutaActiva.snapshot.params.id;
    } else {
      this.modoCreacion = true;
    }
    
  }

  crear(): void {
    //this.usuario.id_rol = this.idRolSeleccionado;
    if (this.validarDatosCompletos()) {
      this.miServicioRutas.store(this.ruta).subscribe(data=>{
        Swal.fire(
          'Creado!',
          'La ruta ha sido creada.',
          'success'
        )
        this.router.navigate(['/pages/rutas/listar']);
      });
    }
  }

  actualizar() {
    this.ruta.id = this.idRutaSeleccionada;
    if (this.validarDatosCompletos()) {
      this.miServicioRutas.update(this.ruta.id, this.ruta ).subscribe(data => {
        Swal.fire(
          'Actualizado!',
          'El ruta ha sido actualizado.',
          'success'
        )
        this.router.navigate(['/pages/rutas/listar']);
      });
    }
  }

  eliminar()
{
  this.miServicioRutas.destroy(this.idRutaSeleccionada).subscribe(
    data=>{
      console.log(data);
    }
  )
} 

validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (
      this.ruta.origen == "" ||
      this.ruta.destino == "") {
      Swal.fire(
        'Error!',
        'Debe completar todos los campos.',
        'error'
      )
      return false;
    } else {
      return true;
    }
}
}