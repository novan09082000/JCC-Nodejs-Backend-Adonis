import Karyawan from "./lib/async";

const args = process.argv.slice(2)

const command = args[0]

switch (command){
    // Release 0
    case "register":
        let[name,password,role] = args[1].split(",")
        Karyawan.register(name,password,role,(err,data) => {
            if(err){
                console.log(err);
            }else{
                console.log(data);
            }
        })
    break;
    case "findAll":
        Karyawan.findAll((err,data) => {
            if(err) console(err)
            console.log(data);
        } )
    break;
    // Release 1
    case "login":
        let [nama,sandi] = args[1].split(",")
        Karyawan.login(nama,sandi)
    break;
    // Release 2
    case "addSiswa":
        let [nami,trainerName] = args[1].split(",")
        Karyawan.addSiswa(nami,trainerName,(err,data) => {
            if(err) console.log(err);
            console.log(data);
        });
    break;
}
