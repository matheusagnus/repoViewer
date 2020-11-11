import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github/github.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage {
  search: String;
  repos: Array<Object>;

  constructor(private githubService: GithubService) { }

  async searchRepo () {
    try {
      const res = await this.githubService.getUsers(this.search)
      console.log(res)
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  ngOnInit() {
  }

}
