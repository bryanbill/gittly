import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';
import { Repositories } from './repos';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'gittly';
  username = 'bryanbill';
  repos: Repositories[] = [];
  user!: User;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.getData();
  }

  setUsername(username: string) {
    this.username = username;
    this.getData();
  }

  getData() {
    const userResponse = this.githubService.getUser(this.username);
    userResponse.subscribe((data) => (this.user = data));

    const response = this.githubService.getUserRepos(this.username);
    response.subscribe((data) => (this.repos = data));
  }
}
