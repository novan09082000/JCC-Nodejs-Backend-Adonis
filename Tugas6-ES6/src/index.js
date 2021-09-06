import {sapa,convert,checkScore,filterData} from './lib/es6';

const args = process.argv.slice(2);
const command = args[0];

switch(command){
    case 'sapa':
        console.log(sapa(args[1]));
        break;
    case 'convert':
        let nama = args[1];
        let domisili = args[2];
        let umur = args[3];
        console.log(convert(nama,domisili,umur));
        break;
    case 'checkScore':
        let string_data = args[1];
        console.log(checkScore([string_data]));
        break;
    case 'filterData':
        let namaKelas = args[1];
        console.log(filterData([namaKelas]));
}   