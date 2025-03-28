export class MyException {
    constructor(message, status) {
        this.message = message;
        this.status = status;
    }

    getStatus() {
        return this.status;
    }

    getMsg() {
        return this.message;
    }
}

export class ContentTypeException extends MyException {
    constructor(message, status) {
        super(message, status);
    }
}