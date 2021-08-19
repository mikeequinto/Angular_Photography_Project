import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Album } from 'src/app/shared/models/album';
import { Picture } from 'src/app/shared/models/picture';

import { ApiPaths } from 'src/enums/api-paths';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.baseUrl + ApiPaths.Albums);
  }

  getAlbum(albumId: string): Observable<{message: string, albumData: Album}> {
    return this.http.get<{message: string, albumData: Album}>(this.baseUrl + ApiPaths.Albums + '/' + albumId);
  }

  createAlbum(name: string, description: string, imageKey: string): Observable<any> {
    const album = {
      name,
      description,
      imageKey
    };
    return this.http.post<Album>(this.baseUrl + ApiPaths.Albums, album);
  }

  deleteAlbum(albumId: string): Observable<any> {
    return this.http.delete<Album>(this.baseUrl + ApiPaths.Albums + '/' + albumId);
  }

  addPicture(album: string, key: string): Observable<any> {
    const picture = {
      key,
      album,
    };
    return this.http.post<Picture>(this.baseUrl + ApiPaths.Albums + '/' + album + '/pictures', picture);
  }
}
