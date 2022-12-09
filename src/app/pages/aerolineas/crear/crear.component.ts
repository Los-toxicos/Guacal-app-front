import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Aerolinea } from '../../../models/aerolinea/aerolinea.model';
import { AerolineaService } from '../../../services/aerolinea.service';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  modoCreacion: boolean = true;
  id_aerolinea: number = 0;
  intentoEnvio: boolean = false;
  aerolinea: Aerolinea = {
    nombre: "",
    nit: "",
    codigo: "",
  }  

  constructor(    
    private rutaActiva: ActivatedRoute,
    private router: Router,
    private miServicioAerolinea: AerolineaService
  ) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id) {
      this.modoCreacion = false;
      this.id_aerolinea = this.rutaActiva.snapshot.params.id;
      this.getAerolinea(this.id_aerolinea)
    } else {
      this.modoCreacion = true;
    }
  }

  getAerolinea(id: number) {
    this.miServicioAerolinea.show(id).subscribe(data => {
      this.aerolinea = data; 
      console.log(this.aerolinea);
           
    });
  }

  crear(): void {    

    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioAerolinea.store(this.aerolinea).subscribe(data => {
        Swal.fire(
          'Creado!',
          'La aerolinea ha sido creada.',
          'success'
        )
        this.router.navigate(['/pages/aerolineas/listar']);
      });
    }
  }

  actualizar() {    
    if (this.validarDatosCompletos()) {
      this.miServicioAerolinea.update(this.aerolinea).subscribe(data => {
        Swal.fire(
          'Actualizado!',
          'La aerolinea ha sido actualizada.',
          'success'
        )
        this.router.navigate(['/pages/aerolineas/listar']);
      });
    }
  }

  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.aerolinea.nombre == "" ||
      this.aerolinea.codigo == "" ||
      this.aerolinea.nit == "") {
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
