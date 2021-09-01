// Soal 1
function teriak() {
    return "Halo Sanbers!";
}

// Soal 2
function kalikan(num1,num2) {
    return num1 * num2 
}

// Soal 3
function introduce(name,age,address,hobby) {
    return "Nama Saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + " dan saya punya hobby yaitu " + hobby;
}

module.exports = {
    teriak : teriak,
    kalikan : kalikan,
    introduce : introduce
}