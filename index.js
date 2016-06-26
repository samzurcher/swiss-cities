var path = require('path');
var jsonfile = require('jsonfile');

var fileName = path.join(path.dirname(__filename), 'swiss-cities.json');
var swissCities = jsonfile.readFileSync(fileName);
exports.swissCities = swissCities;