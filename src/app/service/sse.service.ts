import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SseService {

  private eventSource!: EventSource;

  getSeeData(url: string): Observable<any> {

    return new Observable<string>(observer => {

      this.eventSource = new EventSource(url);

      this.eventSource.onmessage = event => {
        console.log(event.data.Data)
        observer.next(event.data.Data);
      };

      this.eventSource.onopen = event => {
        console.log("OnOpen", event.type)
        observer.next(event.type);
      };

      this.eventSource.onerror = error => {
        console.log("OnError", error);
        observer.error(error);
      };
    });
  }

  closeSse() {
    if (this.eventSource) {
      this.eventSource.close();
    }
  }
}