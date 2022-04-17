import { User } from './user';

export class Repositories {
  constructor(
    public name: string,
    public description: string,
    public html_url: string,
    public created_at: Date,
    public updated_at: Date,
    public language: string,
    public forks: number,
    public watchers: number,
    public open_issues: number,
    public owner: User
  ) {}
}
