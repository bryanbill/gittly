import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Repositories } from '../repos';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private githubService: GithubService) {}
  repos!: Repositories[];

  ngOnInit(): void {
    const response = this.githubService.getUserRepos('bryanbill');
    response.subscribe((data) => (this.repos = data));
  }
}
