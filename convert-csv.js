var csv = require('fast-csv');
var fs = require('fs');

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
        var serializedContent = 'module["exports"] = ' + JSON.stringify(result, null, '  ');
        fs.writeFileSync('./swiss-cities.js', serializedContent);
    });