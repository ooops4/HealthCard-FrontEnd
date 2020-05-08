import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  filename: string;

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', 'http://127.0.0.1:5000/api/file-upload', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  // getFiles(): Observable<any> {
  //   console.log(this.filename);
  //   return this.http.get('http://localhost:8080/getcontentfile/' + this.filename );
  // }


  serFilename(value: string) {
    this.filename = value;
  }
}