import { MyException } from "./MyException.mjs";

export class TeamNotFoundException extends MyException {
    constructor(message, status) {
        super(message, status);
    }
}

export class CantBeEliminatedTeamException extends MyException {
    constructor(message, status) {
        super(message, status);
    }
}

export class RepeatedTeamException extends MyException {
    constructor(message, status) {
        super(message, status);
    }
}
