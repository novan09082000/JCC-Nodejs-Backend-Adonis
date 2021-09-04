// Soal 1
function arrayToObject(people) {
    var now = new Date();
    var thisYear = now.getFullYear();
    var objBaru = {};
    if(people.toString() == [undefined]){
        console.log("\"\"");
    }else{
        for(var i = 0; i <= people.length - 1; i++){
            console.log(i+1 + ". " + people[i][0] + " " + people[i][1] + ": ");
            objBaru.firstName = people[i][0];
            objBaru.lastName = people[i][1];
            objBaru.gender = people[i][2];
            if((people[i][3] == undefined) || (people[i][3] > thisYear)){
                objBaru.age = "Invalid Birth Year";
            }else{
                objBaru.age = thisYear - people[i][3];
            }
            console.log(objBaru);
        }
    }

}
var people = [["Abduh", "Muhamad", "male", 1992], ["Ahmad", "Taufik", "male", 1985]];
var people2 = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ];
var people3 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ];
var arrayKosong = [];

arrayToObject(people);

// Soal 2
function shoppingTime(memberId, money){
    var input = [
        {
            brand : 'Sepatu Stacattu',
            price : 1500000
        },
        {
            brand : 'Baju Zoro',
            price : 500000
        },
        {
            brand : 'Baju H&N',
            price : 250000
        },
        {
            brand : 'Sweater Uniklooh',
            price : 175000
        },
        {
            brand : 'Casing Handphone',
            price : 50000
        }
    ];
    var objShopping = {};
    
    if(memberId == '' || memberId == undefined){
        var hasil = "Mohon maaf, toko X hanya berlaku untuk member saja";

    }else if(money < 50000){
        var hasil = "Mohon maaf, uang tidak cukup";
    }else{
        objShopping.memberId = memberId;
        objShopping.money = money;
        objShopping.listPurchased = [];
        if(money >= 1500000){
            objShopping.listPurchased.push(input[0].brand);
            money -= input[0].price;
        }if(money >= 500000){
            objShopping.listPurchased.push(input[1].brand);
            money -= input[1].price;
        }if(money >= 250000){
            objShopping.listPurchased.push(input[2].brand);
            money -= input[2].price;
        }if(money >= 175000){
            objShopping.listPurchased.push(input[3].brand);
            money -= input[3].price;
        }if(money >= 50000){
            objShopping.listPurchased.push(input[4].brand);
            money -= input[4].price;
        }
        objShopping.changeMoney = money;
        var hasil = objShopping;
    }
    return hasil;
}
console.log(shoppingTime('1820RzKrnWn08', 2475000));

// Soal 3
function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var penumpang = [];
    if(arrPenumpang.toString() == [undefined]){
        return penumpang;
    }else{
        for(var k = 0; k <= arrPenumpang.length - 1; k++) {
            var objPenumpang = {};
            objPenumpang.penumpang = arrPenumpang[k][0];
            objPenumpang.naikDari = arrPenumpang[k][1];
            objPenumpang.tujuan = arrPenumpang[k][2];
            for(var l = 0; l <= rute.length - 1; l++){
                if(arrPenumpang[k][1] == rute[l]){
                    for(var m = 1 + l; m <= 5; m++){
                        if(arrPenumpang[k][2] == rute[m]){
                            objPenumpang.bayar = 2000 * (m-l); 
                        }
                    }
    
                }
            }
            penumpang.push(objPenumpang);
        }
    }
    return penumpang;
}

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));

// Soal 4
function nilaiTertinggi(siswa) {
    var objNilaiTertinggi = {};
    var tempClass = [];
    var tempName = [];
    var tempScore = [];
    
    for(var n = 0 ; n<=siswa.length - 1; n++){
        for(var p = n ; p > 1 ; p--){
            if(tempClass[p] == siswa[n].class){
                if(tempScore[p] < siswa[n].score){                    
                    tempClass.push(siswa[n].class);
                    tempName.push(siswa[n].name);
                    tempScore.push(siswa[n].score);  
                }
            }else{
                tempClass.push(siswa[n].class);
                tempName.push(siswa[n].name);
                tempScore.push(siswa[n].score); 
            }
        }
        for(var o = n + 1 ;o <= siswa.length - 1; o++){
            if(tempClass[p] == siswa[n].class){
                if(tempScore[p] < siswa[n].score){                    
                    tempClass.push(siswa[n].class);
                    tempName.push(siswa[n].name);
                    tempScore.push(siswa[n].score);  
                }
            }else{
                tempClass.push(siswa[n].class);
                tempName.push(siswa[n].name);
                tempScore.push(siswa[n].score); 
            }
        }
    }

    for(var o=1; o < tempClass.length;o++){
        currentName = tempName[o];
        currentClass = tempClass[o];
        currentScore = tempScore[o];
        objNilaiTertinggi[currentClass] = {name : tempName[o], score : tempScore[o]}
    }

    return objNilaiTertinggi; 
}

console.log(nilaiTertinggi([{
    name: 'Bondra',
    score: 100,
    class: 'adonis'
  },
  {
    name: 'Putri',
    score: 76,
    class: 'laravel'
  },
  {
    name: 'Iqbal',
    score: 92,
    class: 'adonis'
  },
  {
    name: 'Tyar',
    score: 71,
    class: 'laravel'
  },
  {
    name: 'Hilmy',
    score: 80,
    class: 'vuejs'
  }]));

console.log(nilaiTertinggi([
    {
      name: 'Asep',
      score: 90,
      class: 'adonis'
    },
    {
      name: 'Ahmad',
      score: 85,
      class: 'vuejs'
    },
    {
      name: 'Regi',
      score: 74,
      class: 'adonis'
    },
    {
      name: 'Afrida',
      score: 78,
      class: 'reactjs'
    }
  ]));
