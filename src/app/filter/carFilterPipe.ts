import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'appFilter',
   // pure: false // позволяет применять фильтр к изменяемому массиву но страдает производительность
})
export class CarFilterPipe implements PipeTransform {
    /**
     *
     * @param carList массив машин
     * @param searchString слово по которому нужно фильтровать
     * @param fieldName поле объекта по которому происходит фильтрация
     */

    transform(carList, searchString: string, fieldName: string) {
        console.log('Filter pipe started.');
        if (carList.length === 0 || searchString === '' || searchString === undefined) {
            return carList;
        } else {
            return carList.filter(car => car[fieldName].toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
        }
    }

}
