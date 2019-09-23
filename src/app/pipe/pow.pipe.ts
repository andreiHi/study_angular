import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'appPow'
})
export class PowPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        if (args.length > 0) {
            const separator = args.length > 1 ? args[1] : '';
            return value + ' pow ' + args[0] + ' ' + separator + ' ' + Math.pow(value, args[0]);
        } else {
            return value;
        }
    }
}
