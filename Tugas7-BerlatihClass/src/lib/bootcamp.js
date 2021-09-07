import Kelas from "./kelas";

export default class Bootcamp {
    constructor(name) {
        this._name = name;
        this._classes = [];
    }
    // release 0
    createClass(nama,level,instructor){
        let kelas = new Kelas(nama,level,instructor); 
        this._classes.push(kelas);
    }
    // release 1
    register(kelas,newStud){
        let namaKelas = [];
        for(let i = 0; i < this._classes.length ; i++){
            namaKelas.push(this._classes[i].name);
        }
        for(let i=0; i < namaKelas.length; i++){
            if(kelas == namaKelas[i]){
                this._classes[i]._students.push(newStud);
            }
        } 
    }
    // release 3
    runBatch(){
        let kelas = new Kelas();
        for(let i=0; i < this.classes.length; i++){
            if(this.classes[i]._name == "Laravel"){
                let kelasBaru = this.classes[i]
                console.log("gratuated from Laravel : ");
                console.log(kelas.graduate(kelasBaru));
                
            }else if(this.classes[i]._name == "React"){
                let kelasBaru = this.classes[i]
                console.log("gratuated from React : ");
                console.log(kelas.graduate(kelasBaru));
            }
        } 
    }    
    get name(){
        return this._name;
    }
    get classes(){
        return this._classes;
    }
} 