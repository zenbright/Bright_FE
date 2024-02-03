export class Message {
    private _content: string;
    private _createdDate: Date;
    private _sender: string;
    private _isUserMessage: boolean;
    constructor(content: string, createdDate: Date, sender: string) {
        this.content = content;
        this.createdDate = createdDate;
        this.sender = sender;
        this._isUserMessage = true;
    }

    get isUserMessage(): boolean {
        return this._isUserMessage;
    }

    get content(): string {
        return this._content;
    }

    set content(newContent: string) {
        this._content = newContent;
    }

    get createdDate(): Date {
        return this._createdDate;
    }

    set createdDate(newDate: Date) {
        this._createdDate = newDate;
    }

    get sender(): string {
        return this._sender;
    }

    set sender(newSender: string) {
        this._sender = newSender;
    }
}