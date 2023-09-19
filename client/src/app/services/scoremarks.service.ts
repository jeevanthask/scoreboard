import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ScoremarksService {
  constructor(private http: HttpClient) {}

  getAllScores() {
    return this.http.get('http://localhost:3000/api/scores');
  }
}
