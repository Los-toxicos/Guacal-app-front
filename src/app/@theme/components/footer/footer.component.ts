import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">      
        Created by Los Tóxicos-Valeria y Juan José 2022
        <br>UAM           
    </span>
    <div class="socials">
      <a href="https://github.com/Los-toxicos" target="_blank" class="ion ion-social-github"></a>      
    </div>
    
  `,
})
export class FooterComponent {
}
