import fs from 'fs'
import fspromise from "fs/promises";
import "core-js/stable";
import "regenerator-runtime/runtime";

export default class Karyawan{
    constructor(name,password,role){
        this.name = name
        this.password = password
        this.role = role
        this.isLogin = false
    }

    // Release 0
    static register(name,password,role,callback){
        let newKaryawan = new this(name,password,role);
        fs.readFile('data.json',(err,data) => {
            if (err) callback(err,null)
            let realData = JSON.parse(data)
            if(role == 'trainer'){
                newKaryawan.student = [];
                realData.push(newKaryawan);
                fs.writeFile('data.json',JSON.stringify(realData),(err) => {
                    if (err) callback(err)
                    callback(null,"Berhasil register")
                })
            }else{
                realData.push(newKaryawan)
                fs.writeFile('data.json',JSON.stringify(realData),(err) => {
                    if (err) callback(err)
                    callback(null,"Berhasil register")
                })
            }
        })
    }

    static findAll(callback){
        fspromise.readFile("data.json")
            .then(data => {
                let realData = JSON.parse(data);
                callback(null,realData)
            })
            .catch(err => {
                callback(err)
            })
    }
    // Release 1
    static login(name,password){
        fspromise.readFile('data.json')
            .then(data => {
                let realData = JSON.parse(data);
                let findName = realData.findIndex(item => item.name == name)
                let findPassword = realData.findIndex(item => item.password == password)
                if(findName == findPassword){
                    realData[findName].isLogin = "true"
                    return fspromise.writeFile('data.json',JSON.stringify(realData))
                }
            })
            .then(() => console.log("Berhasil Login"))
            .catch(err => {
                console.log(err);
            })
    }

    // Release 2
    static async addSiswa(nami,trainerName,callback){
        try {
            let dataRead = await fspromise.readFile('data.json');
            let realData = JSON.parse(dataRead);
            let findAdmin = realData.findIndex(item => item.role == 'admin')
            let findLogin = realData.findIndex(item => item.isLogin == 'true')
            if(findAdmin == findLogin){
                let findNameTrainer = realData.findIndex(item => item.name == trainerName)
                    realData[findNameTrainer].student.push(
                        {
                            name : nami
                        }
                    );
                    await fspromise.writeFile('data.json',JSON.stringify(realData))
                    callback(null,"Berhasil add siswa");
            }
        }catch(error) {
            console.log(error);
        }
    }
}

// class Student {
//     constructor(name) {
//         this.name = name
//     }
// }