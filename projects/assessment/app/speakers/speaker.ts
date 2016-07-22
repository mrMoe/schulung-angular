export class Speaker {
    constructor(
        public name: string,
        public email: string,
        public company: string
    ) {}

    toString(): string { // TODO override not working
        return `${this.name} <${this.email}> from ${this.company}`
    }
}
