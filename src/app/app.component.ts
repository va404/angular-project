import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'digitalnotebook';

  ngOnInit() : void {
   firebase.initializeApp({
      apiKey: 'AIzaSyBeIwxnRrLRB0jouaFRAKmYfBiNMnzB_T4',
     authDomain: 'diginote-12d76.firebaseapp.com'
   })
  }
}
