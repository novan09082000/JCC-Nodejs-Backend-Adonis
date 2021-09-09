var looping = require('./lib/looping');

var functionsWhile = looping.functionsWhile;
var functionsFor = looping.functionsFor;
var persegiPanjang = looping.persegiPanjang;
var tangga = looping.tangga;
var catur = looping.catur;

var args = process.argv

switch (args[2]) {
    case 'while':
        functionsWhile();
        break;
    case 'for':
        functionsFor();
        break;
    case 'persegiPanjang':
        console.log(persegiPanjang(args[3],args[4]));
        break;
    case 'tangga':
        console.log(tangga(args[3]));
        break;
    case 'catur':
        console.log(catur(args[3]));
        break;
}