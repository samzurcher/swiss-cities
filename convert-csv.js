var csv = require('fast-csv');
var jsonfile = require('jsonfile');
jsonfile.spaces = 2;


var result = [];
csv.fromPath('input/be-b-00.04-osv-01.csv', {delimiter: '\t'})
    .on('data', function(data){
        result.push({
            state: data[0],
            name: data[2],
            zipCode: data[7]
        });
    })
    .on('end', function(){
        result.shift();
        jsonfile.writeFile('swiss-cities.json', result, function (error) {
            if (error != null) {
                console.error(error);
            } else {
                console.log('Successfully transformed to swiss-cities.json.');
            }
        });
    });