import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';
import { Repositories } from './repos';
@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}
  /**
   *
   * @param username
   */
  getUser(username: string) {
    return this.http.get<User>(`${environment.githubApiUrl}/users/${username}`);
  }

  getUserRepos(username: string) {
    return this.http.get<Repositories[]>(
      `${environment.githubApiUrl}/users/${username}/repos`
    );
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
