import { MenuServiceService } from './../services/menu-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private menuService: MenuServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.deleteMenu();
  }

  private deleteMenu() {

    const menuid = this.route.snapshot.paramMap.get(`menuId`);
    console.log(menuid);
    this.menuService.deleteMenu(menuid as string)
      .then(() => this.router.navigate([`/menu`])
    );
  }

}
