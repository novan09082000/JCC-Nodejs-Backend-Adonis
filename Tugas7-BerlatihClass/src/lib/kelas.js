import Student from "./student";

export default class Kelas{
    constructor(name,level,instructor) {
        this._name = name;
        this._students = [];
        this._level = level;
        this._instructor = instructor;
    }
    // Release 2
    graduate(finalScore){
        let objBaru = {}
        let participant = []
        let completed = []
        let mastered = []
        for(let j =0; j < finalScore._students.length; j++){
            if(finalScore._students[j]._finalScore < 60){
                participant.push(finalScore._students[j]);
            }else if(finalScore._students[j]._finalScore > 60 && finalScore._students[j]._finalScore < 85){
                completed.push(finalScore._students[j]);
            }else if(finalScore._students[j]._finalScore > 85){
                mastered.push(finalScore._students[j]);
            }
        }
        let {participant,completed,mastered} = objBaru
        return objBaru;  
    }

    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }
    get instructor(){
        return this._instructor;
    }

} 