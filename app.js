const request = require('request');
const queryString = require('query-string');

module.exports = function (version, apikey) {
    var openuv = {};
    var endpoint = 'https://api.openuv.io/api/'+version;
    var options = {
      headers: {
        'x-access-token': apikey
      }
    };

    openuv.uv = function (params, cb) {
      options.url = endpoint+'/uv?'+queryString.stringify(params);
      console.log(options);
      request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
          cb(null, JSON.parse(body).result);
        }
        else {
          cb(JSON.parse(body).error, null);
        }
      })
    };

    openuv.forecast = function (params, cb) {
      options.url = endpoint+'/forecast?'+queryString.stringify(params);
      request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
          cb(null, JSON.parse(body).result);
        }
        else {
          cb(JSON.parse(body).error, null);
        }
      })
    };

    openuv.protection = function (params, cb) {
      options.url = endpoint+'/protection?'+queryString.stringify(params);
      request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
          cb(null, JSON.parse(body).result);
        }
        else {
          cb(JSON.parse(body).error, null);
        }
      })
    };

    return openuv;
};
