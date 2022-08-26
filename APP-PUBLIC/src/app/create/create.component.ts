import { MenuServiceService } from './../services/menu-service.service';
import { Menu } from './../models/menu';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public newMenu: Menu = {
    _id: '',
    name: '',
    price: 0,
    type:'',
    // releaseDate: '',
    description: '',
    rating: 5,
    image: ''
  };

  constructor(private menuService: MenuServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  public createNewMenu(newMenu: Menu): void{
    this.menuService.createMenu(newMenu)
    .then(menu => {
      if (menu) {
        this.router.navigate([`/menu`]);
      }
    });
  }

}
