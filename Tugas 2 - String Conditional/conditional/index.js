// Soal 1
var nama = "Novan";
var peran = "Werewolf";

if(nama == '' && peran == ''){
    console.log("Nama harus diisi");
}else if(peran == '') {
    console.log("Hallo " + nama + ", Pilih peranmu untuk memulai game");
}else if(peran == 'Penyihir'){
    console.log("Selamat datang di Dunia Werewolf, " + nama);
    console.log("Halo " + peran + " " + nama + ", kamu dapat melihat siapa yang menjadi werewolf!");
}else if(peran == 'Guard'){
    console.log("Selamat datang di Dunia Werewolf, " + nama);
    console.log("Halo " + peran + " " + nama + ", kamu akan membantu melindungi temanmu dari serangan werewolf.");
}else if(peran == 'Werewolf'){
    console.log("Selamat datang di Dunia Werewolf, " + nama);
    console.log("Halo " + peran + " " + nama + ", Kamu akan memakan mangsa setiap malam!");
}

// Soal 2
var tanggal = 9;
var bulan = 8;
var tahun = 2000;

switch(bulan){
    case 1: { console.log(tanggal + ' ' + 'Januari' + ' ' + tahun); break;}
    case 2: { console.log(tanggal + ' ' + 'Februari' + ' ' + tahun); break;}
    case 3: { console.log(tanggal + ' ' + 'Maret' + ' ' + tahun); break;}
    case 4: { console.log(tanggal + ' ' + 'April' + ' ' + tahun); break;}
    case 5: { console.log(tanggal + ' ' + 'Mei' + ' ' + tahun); break;}
    case 6: { console.log(tanggal + ' ' + 'Juni' + ' ' + tahun); break;}
    case 7: { console.log(tanggal + ' ' + 'Juli' + ' ' + tahun); break;}
    case 8: { console.log(tanggal + ' ' + 'Agustus' + ' ' + tahun); break;}
    case 9: { console.log(tanggal + ' ' + 'September' + ' ' + tahun); break;}
    case 10: { console.log(tanggal + ' ' + 'Oktober' + ' ' + tahun); break;}
    case 11: { console.log(tanggal + ' ' + 'November' + ' ' + tahun); break;}
    case 12: { console.log(tanggal + ' ' + 'Desember' + ' ' + tahun); break;}
}
