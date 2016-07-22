import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ 
    name: 'filter',
    pure: false
})
export class FilterArrayPipe implements PipeTransform {

    private _isValid(item, args): boolean {

        for (let key in args) {

            if(args[key] === Object(args[key])) {

                let deep = this._isValid(item[key], args[key]);
                if (!deep) {
                    return false;
                }

            } else {

                let val = args[key] && args[key].toLowerCase();

                if (val
                    && val.length > 0
                    && (typeof item[key] === 'string' || item[key] instanceof String)
                    && item[key].toLowerCase().indexOf(val) === -1
                ) {
                    return false;
                }
            }

        }

        return true;
    }

    transform(value: any[], args: Object) {
        if (!value) {
            return value;
        }

        return value.filter(x => this._isValid(x, args));
    }
}