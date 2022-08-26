
import { Injectable } from '@angular/core';
import { Menu} from '../models/menu';
import {HttpClient, HttpResponse} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class MenuServiceService {

   private menusUrl = 'http://localhost:3000/api/menus';
   constructor(private http:HttpClient){}

   getMenus() : Promise<void | Menu[]>{

     return this.http.get(this.menusUrl)
      .toPromise()
      .then(response => response as Menu[])
      .catch(this.handleError);
    }

    getMenuById(menuid: string) {
      return this.http.get(`${this.menusUrl}/${menuid}`)
      .toPromise()
      .then(response => response as Menu)
      .catch(this.handleError);
    }


    createMenu(newMenu: Menu): Promise<void | Menu> {
      return this.http.post(this.menusUrl, newMenu)
        .toPromise()
        .then(response => response as Menu)
        .catch(this.handleError);
    }

    updateMenu(menuid: string,editMenu: Menu): Promise<void | Menu> {
      return this.http.put(`${this.menusUrl}/${menuid}`, editMenu)
        .toPromise()
        .then(response => response as Menu)
        .catch(this.handleError);
    }

    deleteMenu(menuid: string) {
      return this.http.delete(`${this.menusUrl}/${menuid}`)
      .toPromise()
      .then(response => response as Menu)
      .catch(this.handleError);
    }

    private handleError(error: any){
      console.log(error);
  }
}
