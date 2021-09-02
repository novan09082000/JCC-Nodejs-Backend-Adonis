// Soal 1
function range(startNum,finishNum) {
    var angkaAwal = parseInt(startNum);
    var angkaAkhir = parseInt(finishNum);
    var isiArray = [];
    if(angkaAwal < angkaAkhir){
        for (var i = angkaAwal; i <= angkaAkhir ; i++) {
            isiArray.push(angkaAwal);
            angkaAwal += 1;
        }
    }else if(angkaAwal > angkaAkhir){
        for (var i = angkaAwal; i >= angkaAkhir; i--) {
            isiArray.push(angkaAwal);
            angkaAwal -= 1;
        }
    }else if(startNum == undefined || finishNum == undefined){
        isiArray = [];
    }
    return isiArray;
}

// Soal 2
function rangeWithStep(startNum,finishNum,step) {
    var angkaAwal = parseInt(startNum);
    var angkaAkhir = parseInt(finishNum);
    var langkah = parseInt(step);
    var isiArray = [];
    if(angkaAwal < angkaAkhir){
        for (var i = angkaAwal; i <= angkaAkhir ; i += langkah) {
            isiArray.push(angkaAwal);
            angkaAwal += langkah;
        }
    }else if(angkaAwal > angkaAkhir){
        for (var i = angkaAwal; i >= angkaAkhir ; i -= langkah) {
            isiArray.push(angkaAwal);
            angkaAwal -= langkah;
        }
    }else if(startNum == undefined || finishNum == undefined){
        isiArray = [];
    }
    return isiArray;
}

// Soal 3
function sum(startNum,finishNum,step) {
    var arrayRange = range(startNum,finishNum);
    var arrayRangeWithStep = rangeWithStep(startNum,finishNum,step);
    var jumlah = 0;
    if(step == undefined){
        for (var i = 0; i < arrayRange.length ; i++) {
            jumlah += arrayRange[i];
        }
    }else if(step != undefined){
        for (var i = 0; i < arrayRangeWithStep.length ; i++) {
            jumlah += arrayRangeWithStep[i];
        }
    }else if(startNum == undefined || finishNum == undefined){
        isiArray = [];
    }
    return jumlah;
}

// Soal 4
function dataHandling() {
    var input = [
        ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
        ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
        ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
        ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ];
    for(var i = 0 ; i < input.length; i++){
            console.log("Nomor ID : " + input[i][1]);
            console.log("Nama Lengkap : " + input[i][2]);
            console.log("TTL : " + input[i][3]);
            console.log("Hobi : " + input[i][4]);
            console.log("");
    }
}

// Soal 5
function balikKata(kata) {
    var kataAwal = kata;
    var jumlahKata = kataAwal.length;
    var kataBalik = "";
    for(var i = 0; i < kataAwal.length; i++){
        kataBalik += kataAwal[jumlahKata -1];
        jumlahKata -= 1;
    }
    return kataBalik;
}

module.exports = {
    range : range,
    rangeWithStep : rangeWithStep,
    sum : sum,
    dataHandling : dataHandling,
    balikKata : balikKata
}
