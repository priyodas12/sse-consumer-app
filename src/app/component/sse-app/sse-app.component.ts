import { Component } from '@angular/core';
import { SseService } from '../../service/sse.service';
import { Subscription } from 'rxjs';
import { env } from '../../../environment/env.dev';

@Component({
  selector: 'app-sse-app',
  standalone: true,
  imports: [],
  templateUrl: './sse-app.component.html',
  styleUrl: './sse-app.component.css'
})
export class SseAppComponent {

  eventData: string = '';

  private sseSubscription!: Subscription;

  constructor(private sseService: SseService) { }

  ngOnInit() {
    this.sseSubscription = this.sseService.getSeeData(env.devURL)
      .subscribe({
        next: (event: MessageEvent) => {
          console.log("Received event: ", event);
          this.eventData = event.data;
        },
        error: (error) => {
          console.error('Error:', error);
        }
      });
  }

  getEventData() {
    return this.eventData
  }

  ngOnDestroy() {
    this.sseSubscription.unsubscribe();
    this.sseService.closeSse();
  }

}
