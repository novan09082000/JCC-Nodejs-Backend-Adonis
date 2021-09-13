const fs = require('fs');
const Karyawan = require('./karyawan');

class Bootcamp{
    static register(req,res){
        fs.readFile('data.json',(err,data) => {
            if(err){
                res.status(400).json({"errors" : "error membaca data"})
            }else{
                let existingData = JSON.parse(data)
                let {name,password,role} = req.body
                let employee = new Karyawan(name,password,role)
                existingData.push(employee)
                fs.writeFile('data.json',JSON.stringify(existingData),(err) => {
                    if(err){
                        res.status(400).json({"errors": "error menyimpan data"})
                    }else{
                        res.status(201).json({"message": "Berhasil register"})
                    }
                })
            }
        })
    }
    static findAll(req,res){
        fs.readFile('data.json',(err,data) => {
            if(err){
                res.status(400).json({"errors" : "error membaca data"})
            }else{
                let realData = JSON.parse(data)
                res.status(200).json({"message" : "Berhasil get karyawan", data : realData})
            }
        })
    }
    static login(req,res){
        fs.readFile('data.json',(err,data) => {
            if(err){
                res.status(400).json({"errors" : "error membaca data"})
            }else {
                let employees = JSON.parse(data)
                let {name,password} = req.body
                let indexEmp = employees.findIndex(emp => emp.name == name)
                if(indexEmp == -1){
                    res.status(400).json({"message" : "data tidak ditemukan"})
                }else {
                    let employee = employees[indexEmp]
                    if(employee.password == password){
                        employee.isLogin = true
                        employees.splice(indexEmp,1,employee)
                        return fs.writeFile('data.json',JSON.stringify(employees),(err) => {
                            if(err){
                                res.status(400).json({"errors": "error menyimpan data"})
                            }else{
                                res.status(201).json({"message": "Berhasil login"})
                            }
                        })
                    }else{
                        res.status(400).json({"errors": "password salah"})
                    }
                }
            }
        })
    }
    static addSiswa(req,res){
        fs.readFile('data.json',(err,data) => {
            if(err){
                res.status(400).json({"error": "error membaca data"})
            }else{
                let employess = JSON.parse(data);
                let {nama,kelas} = req.body 
                let admin = employess.find(emp => emp.role == "admin")
                if (!admin.isLogin){
                    return res.status(400).json({"message": "tidak diperbolehkan menambah siswa"})
                }
                let IndexTrainer = employess.findIndex(emp => emp.name == req.params.name)
                if (IndexTrainer == -1){
                    res.status(400).json({"message": "trainer tidak ditemukan"})
                }else{
                    let trainer = employess[IndexTrainer]
                    if(trainer.students){
                        trainer.students.push({
                            name: nama,
                            class: kelas
                        })
                    }else{
                        trainer.students = [{
                            name: nama,
                            class: kelas
                        }]
                    }
                    employess.splice(IndexTrainer,1,trainer)
                    return fs.writeFile('data.json',JSON.stringify(employess),(err) => {
                        if(err){
                            res.status(400).json({"errors": "error menyimpan data"})
                        }else{
                            res.status(201).json({"message": "Berhasil add siswa"})
                        }
                    })
                }
            }
        })
    }
}

module.exports = Bootcamp