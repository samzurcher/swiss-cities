var fs = require('fs');
var path = require('path');
var swissCities = JSON.parse(fs.readFileSync(path.join(__dirname, 'swiss-cities.json'), 'utf8'));
exports.swissCities = swissCities;