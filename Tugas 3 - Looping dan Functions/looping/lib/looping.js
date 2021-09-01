// Soal 1
function functionsWhile() {
    console.log("LOOPING PERTAMA");
    var jumlah = 2
    while(jumlah <= 20){
        console.log(jumlah + " - I love coding");
        jumlah += 2;
    }
    console.log("LOOPING KEDUA");
    while(jumlah >= 2){
        console.log(jumlah + " - I will become a mobile developer");
        jumlah -= 2;
    }
}


// Soal 2
function functionsFor(){
    for (var i = 1; i <= 20; i++) {
        if(i % 2 == 1 && i % 3 == 0){
            console.log(i + " - I Love Coding");
        }else if(i % 2 == 1){
            console.log(i + " - Santai");
        }else if(i % 2 == 0){
            console.log(i + " - Berkualitas");
        }
    }    
}


// Soal 3
function persegiPanjang(panjang,lebar) {
    var pagar = "";
    for(i = 1; i <= lebar; i++){
        for(j = 1; j <= panjang; j++){
            pagar += "#";
        }
        pagar += "\n";
    }
    return pagar;
}

// Soal 4
function tangga(sisi) {
    var pagar = "";
    for(i = 1; i <= sisi; i++){
        for(j = 1; j <= i; j++){
            pagar += "#";
        }
        pagar += "\n";
    }
    return pagar;
}

// Soal 5
function catur(sisi) {
    var pagar = "";
    for(i = 1; i <= sisi; i++){
        for(j = 1; j <= 8; j++){
            if((i % 2 == 1 && j % 2 == 1) || (i % 2 == 0 && j % 2 == 0)){
                pagar += " ";
            }else{
                pagar += "#";
            }
        }
        pagar += "\n";
    }
    return pagar;
}
module.exports = {
    functionsFor : functionsFor,
    functionsWhile : functionsWhile,
    persegiPanjang : persegiPanjang,
    tangga : tangga,
    catur : catur
}