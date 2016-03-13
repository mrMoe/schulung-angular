export class Speaker {
    constructor(
        public name: string,
        public email: string,
        public company: string
    ) {}
}

export class Talk {
    constructor (
        public id: string,
        public title: string,
        public caption: string,
        public speakers: Speaker
    ){}
}
