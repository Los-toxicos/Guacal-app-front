import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from '../../../services/seguridad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private miServicioSeguridad: SeguridadService,
    private router: Router) { }

  ngOnInit(): void {
    this.miServicioSeguridad.logout()
    Swal.fire(
      'LogOut',
      'Sesión cerrada con éxito',
      'info'
    )
    this.router.navigate(['/pages/dashboard']);
  }

}
