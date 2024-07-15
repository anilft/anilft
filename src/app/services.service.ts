import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Configuration, OpenAIApi } from 'openai';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private apiUrl = 'https://api.openai.com/v1/files';
  private apiKey = ''; // Ideally, store this securely
  constructor(private http: HttpClient) {}
  listFiles(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`,
    });
    return this.http.get(this.apiUrl, { headers });
  }

  uploadFile(file: File, purposeVal: any): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('purpose', purposeVal);  // Specify the purpose of the file

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`
    });

    return this.http.post(this.apiUrl, formData, { headers });
  }
}
