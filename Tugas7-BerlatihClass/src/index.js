import Bootcamp from './lib/bootcamp';
import Kelas from './lib/kelas';
import Student from './lib/student';

// Release 0
const sanber = new Bootcamp("sanbercode");
sanber.createClass("Laravel","beginner","abduh");
sanber.createClass("React","beginner","abdul");
console.log(sanber.classes);

// Release 1
let names = ["regi","ahmad","bondra","iqbal","putri","rezky"];
names.map((nama,index) => {
    let newStud = new Student(nama);
    let kelas = sanber.classes[index % 2].name;
    sanber.register(kelas,newStud);
});

sanber.classes.forEach(kelas => {
    console.log(kelas)
});
 
for(let i=0; i < sanber.classes.length; i++){
    for(let j=0; j < sanber.classes[i]._students.length; j++){
        let score = [];
        let finalScore = 0;
        let lamaBootcamp = 4
        for(let k=0; k < lamaBootcamp ; k++){
            var acak = Math.floor(Math.random()* 50)+50;
            score.push(acak);
        }
        for(let l=0;l < lamaBootcamp; l++){
            sanber.classes[i]._students[j]._score.push(score[l]);
        }
        for(let m=0; m < lamaBootcamp; m++){
            finalScore += score[m];
        }
        let hasil = Math.floor(finalScore /= lamaBootcamp)
        sanber.classes[i]._students[j]._finalScore += hasil;
    }
}

// Release 3
let kelasbaru = sanber.classes;
sanber.runBatch(kelasbaru);


// console.log(sanber.classes[0].name);
// console.log(sanber.classes[1]);