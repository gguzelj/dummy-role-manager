var parsedJSON = require('../resources/roles.json');

var map = {};

parsedJSON.forEach(function (jsonElement) {
    map[jsonElement.id] = jsonElement;
});

var Service = {};

Service.findAll = function(callback) {
    var response = [];
    for(key in map){
        response.push(map[key]);
    }
    callback(response);
};

Service.findEmail = function(email, callback) {
    for(var emailId in map){
        if (email == map[emailId].email)
            callback(map[emailId].roles);
    }
};

module.exports = Service;
