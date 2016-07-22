import {Speaker} from '../speakers/speaker';

export class Talk {
    constructor (
        public id: String,
        public title: String,
        public caption: String,
        public text: String,
        public speakers: Speaker,
        public reviews: String[]
    ){}
}
