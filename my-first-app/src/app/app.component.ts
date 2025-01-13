import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, ServerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Does this change';
  name = '';
}
