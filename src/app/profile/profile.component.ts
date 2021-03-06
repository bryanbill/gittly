import { Component, Input, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private githubService: GithubService) {}

  @Input()
  user!: User;

 
  ngOnInit(): void {
   
  }

  openLink(user: User) {
    window.open(user.html_url, '_blank');
  }
}
