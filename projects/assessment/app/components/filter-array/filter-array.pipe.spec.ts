import {FilterArrayPipe} from './filter-array.pipe';

describe('FilterArrayPipe', () => {
    let pipe: FilterArrayPipe;
    let values = [
        { name: 'duffy', email: 'duffy@comp' },
        { name: 'mini', email: 'mini@acme' }
    ];

    beforeEach(() => pipe = new FilterArrayPipe());

    it('should be exist', () => expect(pipe).toBeDefined());
    it('return values if filter is empty', () => expect(pipe.transform(values, {})).toEqual(values));
    it('filters single property name', () => {
        expect(pipe.transform(values, [{ name: 'duf' }])).toEqual([{ name: 'duffy', email: 'duffy@comp' }]);
        expect(pipe.transform(values, [{ name: 'min' }])).not.toEqual([{ name: 'duffy', email: 'duffy@comp' }]);
        expect(pipe.transform(values, [{ name: '@' }])).toEqual([]);
        expect(pipe.transform(values, [{ email: '@' }])).toEqual(values);
    });
    it('filters multiple property name', () => {
        expect(pipe.transform(values, [{ name: 'uf', email: 'comp' }])).toEqual([{ name: 'duffy', email: 'duffy@comp' }]);
        expect(pipe.transform(values, [{ name: 'uf', email: 'compa' }])).toEqual([]);
    });
});