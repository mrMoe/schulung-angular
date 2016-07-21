export class User {
    constructor(
        public name: string,
        public password: string,
        public email: string,
        public isAdmin: boolean = false
    ) {}
}
