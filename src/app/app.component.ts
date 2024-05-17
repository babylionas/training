import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DwtComponent } from './dwt/dwt.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DwtComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-training';
}
