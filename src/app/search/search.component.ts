import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { GithubService } from '../github.service';
import { Repositories } from '../repos';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private githubService: GithubService) {}

  @Input()
  repos!: Repositories[];

  search: string = '';

  @Input()
  username!: string;

  @Output()
  setUsernameEvent = new EventEmitter<string>();

  ngOnInit(): void {
   
  }

  setUsername() {
    this.setUsernameEvent.emit(this.search);
  }
  openLink(repo: Repositories) {
    window.open(repo.html_url, '_blank');
  }
}
