var csv = require('fast-csv');
var fs = require('fs');
var _ = require('lodash');
var Random = require('random-js');

var writeResult = function(fileName, result) {
    var serializedContent = 'module["exports"] = ' + JSON.stringify(result, null, '  ');
    fs.writeFileSync(fileName, serializedContent);
};

var extractRandomSample = function(result, seed, size) {
    var randomResult = _.clone(result);
    var mt = Random.engines.mt19937();
    mt.seed(seed);
    Random.shuffle(mt, randomResult);
    return _.take(randomResult, size);
};

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
        writeResult('./swiss-cities.js', result);
        writeResult('./swiss-cities-random-sample.js', extractRandomSample(result, 1234, 200));
    });