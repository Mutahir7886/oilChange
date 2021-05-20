import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  showAuth:string;

  constructor(private activatedroute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedroute.data.subscribe(data => {
      console.log('auth received', data)
      this.showAuth = data.auth
  })
  }

  route(params){
    this.router.navigate(['/auth/' +params])
  }

}
