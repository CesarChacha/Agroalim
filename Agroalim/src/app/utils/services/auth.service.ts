import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private ws:HttpClient
  ) { }
}
