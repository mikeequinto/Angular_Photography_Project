import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiPaths } from 'src/enums/api-paths';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getImage(key: string, resized: boolean): Observable<any> {
    return this.http.get<any>(this.baseUrl + ApiPaths.Images + '/' + key + '?resized=' + resized, {responseType: 'text' as 'json'})     
  }

  uploadImage(image: any): Observable<any> {
    // image is actually the form data
    return this.http.post<any>(this.baseUrl + ApiPaths.Images, image)
  }

}
