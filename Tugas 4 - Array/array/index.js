var array = require('./lib/array');

var range = array.range;
var rangeWithStep = array.rangeWithStep;
var sum = array.sum;
var dataHandling = array.dataHandling;
var balikKata = array.balikKata;

var args = process.argv;

switch (args[2]) {
    case 'range':
        console.log(range(args[3],args[4]));
        break;
    case 'rangeWithStep':
        console.log(rangeWithStep(args[3],args[4],args[5]));
        break;
    case 'sum':
        console.log(sum(args[3],args[4],args[5]));
        break;
    case 'dataHandling':
        dataHandling();
        break;
    case 'balikKata':
        console.log(balikKata(args[3]));;
        break;
}