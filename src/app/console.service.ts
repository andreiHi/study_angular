import {Injectable} from '@angular/core';

/**
 *  providedIn: 'root':  позволяет зарегистрировать данный сервис в корневом модуле не приписывая его там
 */
@Injectable({
    providedIn: 'root'
})
export class ConsoleService {

    log(str: string) {
        console.log(str);
    }
}
