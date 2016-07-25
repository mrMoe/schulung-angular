export class Talk{
    id: String;
    title: String;
    caption: String;
    text: String;
    speaker: Speaker;
}

export class Speaker {
    name: String;
    email: String;
    company: String;
}