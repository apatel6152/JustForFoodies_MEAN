import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Menu } from '../models/menu';
import { MenuServiceService } from '../services/menu-service.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  public menus: Menu[] = [];
  public message = '';

  searchForm;

  constructor(private menuService: MenuServiceService, private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      search: '',
    });
   }

  // searchText = '';

  ngOnInit(): void {
    this.getMenus();
  }

  private getMenus() {

    this.menuService
      .getMenus()
      .then(menus => {
        // debugger
        this.menus = menus as Menu[]
      });
  }

}
