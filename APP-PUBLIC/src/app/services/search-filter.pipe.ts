import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'appFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(menus: any[], search: string):any {
    if (!menus) {
      return [];
    }
    if (!search) {
      return menus;
    }
    if (menus) {
      const regexp = new RegExp(search, 'i');
      const properties = Object.keys(menus[0]);
      return [
        ...menus.filter(item => {
          return properties.some(property => regexp.test(item[property]));
        })
      ];
    }
  }
}
