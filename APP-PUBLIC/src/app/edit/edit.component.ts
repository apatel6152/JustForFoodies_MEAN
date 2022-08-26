import { MenuServiceService } from './../services/menu-service.service';
import { Menu } from './../models/menu';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public editMenu: Menu = {
    _id: '',
    name :  '' ,
    price: 0,
    type: '',
    description: '',
    rating: 5,
    image: ''
  };

  constructor(private menuService: MenuServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    var menuid = this.route.snapshot.paramMap.get('menuid');

    this.menuService.getMenuById(menuid as string)
      .then(movie => {
        this.editMenu = movie as Menu;

      });

  }

  public updateMenu(editMenu: Menu): void{

    const menuid = this.route.snapshot.paramMap.get('menuid');
    this.menuService.updateMenu(menuid as string,editMenu)
    .then(editMenu => {
      if (editMenu) {
        this.router.navigate([`/menu`]);
      }
    });
  }

}
