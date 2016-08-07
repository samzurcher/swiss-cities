var csv = require('fast-csv');
var fs = require('fs');
var _ = require('lodash');
var Random = require('random-js');

var mainLanguageByState = {
    AG: 'de',
    AI: 'de',
    AR: 'de',
    BE: 'de',
    BL: 'de',
    BS: 'de',
    FR: 'fr',
    GE: 'fr',
    GL: 'de',
    GR: 'rt',
    JU: 'fr',
    LU: 'de',
    NE: 'fr',
    NW: 'de',
    OW: 'de',
    SG: 'de',
    SH: 'de',
    SO: 'de',
    SZ: 'de',
    TG: 'de',
    TI: 'it',
    UR: 'de',
    VD: 'fr',
    VS: 'de',
    ZG: 'de',
    ZH: 'de'
};

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

var getPrincipleLanguage = function(data) {
    var counts = [
        {
            lang: 'de',
            count: data[3]
        }, {
            lang: 'fr',
            count: data[4]
        }, {
            lang: 'it',
            count: data[5]
        }, {
            lang: 'rt',
            count: data[6]
        }
    ];
    return _.sortBy(counts, function(o){return -o.count;})[0].lang;
};


var mainLanguageByCityName = {};
csv.fromPath('input/px-x-4003000000_123.csv', {delimiter: ','})
    .on('data', function(data){
        var city = data[1].replace(/\.*\d*\s/, '');
        var language = getPrincipleLanguage(data);
        if (!city.startsWith('>>')) {
            mainLanguageByCityName[city] = language;
        }
    })
    .on('end', function() {

        var result = [];
        csv.fromPath('input/be-b-00.04-osv-01.csv', {delimiter: '\t'})
            .on('data', function(data){
                result.push({
                    state: data[0],
                    name: data[2],
                    zipCode: data[7],
                    language: mainLanguageByCityName[data[2]] || mainLanguageByState[data[0]] || 'n/a'
                });
            })
            .on('end', function(){
                result.shift();
                writeResult('./swiss-cities.js', result);
                writeResult('./swiss-cities-random-sample.js', extractRandomSample(result, 1234, 200));
            });

    });


