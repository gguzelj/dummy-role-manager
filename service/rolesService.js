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
            callback(null, map[emailId].roles);
    }
    callback(new Error("No user with email " + email), null);
};

module.exports = Service;
