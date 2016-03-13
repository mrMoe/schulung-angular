import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({ 
    name: 'filter',
    pure: false
})
export class FilterArrayPipe implements PipeTransform {

    private _isValid(item, search): boolean {

        for (let key in search) {

            if(typeof search[key] === 'object') {

                let deep = this._isValid(item, search[key]);
                if (!deep) {
                    return false;
                }

            } else {

                let val = search[key] && search[key].toLowerCase();

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

    transform(value: any[], args: any[] = []) {
        // TODO: deep change detection?

        if (!value
            || args.length !== 1) {
            return value;
        }

        let search = args[0];
        
        if(!search){
            return value;
        }

        return value.filter(x => this._isValid(x, search));
    }
}