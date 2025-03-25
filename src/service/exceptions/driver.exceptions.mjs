import { MyException } from "../../service/exceptions/MyException.mjs";

export class DriverPositionCoverException extends MyException {
    constructor(message, status) {
        super(message, status);
    }
}

export class DriverNameException extends MyException {
    constructor(message, status) {
        super(message, status);
    }
}

export class DriverNotFoundException extends MyException {
    constructor(message, status) {
        super(message, status);
    }
}
