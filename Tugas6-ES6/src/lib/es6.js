// Soal 1
export const sapa = (nama) => `halo selamat pagi, ${nama}`; 

// Soal 2
export const convert = (...params) => {
    let [nama,domisili,umur] = params
    return {
        nama,
        domisili,
        umur
    };
};

// Soal 3
export const checkScore = (string_data) => {
    let [array] = string_data
    let koma = array.split(",");
    let arrayBaru = [];
    for(let i=0;i <koma.length;i++){
        arrayBaru.push(koma[i].split(":"));
    }
    let arrayValue = [];
    for(let i=0; i <koma.length;i++){
        arrayValue.push(arrayBaru[i][1]);
    }
    let nama = arrayValue[0];
    let kelas = arrayValue[1];
    let score = arrayValue[2];
    let hasil = {nama,kelas,score}; 

    return hasil;
}

// Soal 4

export const filterData = (...namaKelas) => {
    let [kelas] = namaKelas;
    const data = [
        { name: "Ahmad", class: "adonis"},
        { name: "Regi", class: "laravel"},
        { name: "Bondra", class: "adonis"},
        { name: "Iqbal", class: "vuejs" },
        { name: "Putri", class: "Laravel" }
    ];
    let arrKelas = [];
    const hasil = data.filter(dt => dt.class == kelas);
    return hasil;
}