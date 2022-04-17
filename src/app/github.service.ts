import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
    return this.http
      .get(`${environment.githubApiUrl}/users/${username}`)
      .subscribe((data) => data);
  }

  getUserRepos(username: string) {
    return this.http
      .get(`${environment.githubApiUrl}/users/${username}/repos`)
      .subscribe((data) => data);
  }
}
