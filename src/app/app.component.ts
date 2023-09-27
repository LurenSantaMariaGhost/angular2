import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lista-de-alumnos';
  enabled = false;

  heroes = ['Sofia', 'Sonia','Viola'];

  getBackgroundColor(): object {
    return {
      backgroundColor: this.enabled ? 'red' : 'cyan',
    };
  }
}
