import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServersComponent } from './servers/servers.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, ServersComponent],
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: dodgerblue;
    }
    `]
})
export class AppComponent {
  title = 'Does this change';
  name = '';
}
