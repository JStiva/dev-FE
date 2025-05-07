import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TableComponent, HeaderComponent],
  styleUrl: './app.component.scss',
  template: `
    <app-header />
    <app-table />
  `,
})
export class AppComponent {
  title = 'angular-frontend';
}
