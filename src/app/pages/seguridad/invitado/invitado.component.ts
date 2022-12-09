import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from '../../../services/seguridad.service';

@Component({
  selector: 'ngx-invitado',
  templateUrl: './invitado.component.html',
  styleUrls: ['./invitado.component.scss']
})
export class InvitadoComponent implements OnInit {

  constructor(private miServicioSeguridad : SeguridadService,
    private router: Router) { }

  ngOnInit(): void {
    this.miServicioSeguridad.loginInvitado();
    this.router.navigate(['/pages/dashboard']);
  }

}
