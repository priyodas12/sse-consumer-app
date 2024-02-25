import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SseAppComponent } from './component/sse-app/sse-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SseAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sse-consumer-app';
}
