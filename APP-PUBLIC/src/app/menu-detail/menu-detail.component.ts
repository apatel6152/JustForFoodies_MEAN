import { Menu } from './../models/menu';
import { MenuServiceService } from './../services/menu-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css'],
  providers: [MenuServiceService]
})
export class MenuDetailComponent implements OnInit {

  public menu = new Menu();
  @Input() menu_rating: Menu | undefined;

  constructor(private menuService: MenuServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.getMenuDetails();

  }

  private getMenuDetails() {
      const menuid = this.route.snapshot.paramMap.get('menuid');
      console.log(menuid);
      this.menuService.getMenuById(menuid as string)
        .then(menu => {
          this.menu = menu as unknown as Menu;

      });
  }

}
