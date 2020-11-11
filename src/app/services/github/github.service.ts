import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class GithubService {
  constructor(private Http: HttpClient) {}

  getUsers (user) {
    return this.Http.get(`https://api.github.com/users/${user}`)
  }
}
