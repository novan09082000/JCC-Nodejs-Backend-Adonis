export default class Student {
    constructor(name) {
        this._name = name;
        this._score = [];
        this._finalScore = 0;
    }
    get name(){
        return this._name;
    }
    get score(){
        return this._score;
    }
    get instructor(){
        return this._finalScore;
    }
} 