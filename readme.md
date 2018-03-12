OpenUV - A Node.js client library for [OpenUV UV Index API](https://www.openuv.io)
==========

A Node.js client library for [OpenUV UV Index API](https://www.openuv.io).

For API Key, documentation and more detailed info about endpoints and response format see [OpenUV UV Index API Documentation](https://www.openuv.io)

## Installation
```
npm install openuv
```

## Basic Usage
To get a real-time UV Index for a particular location you'll need:

```javascript
var openuv = require('openuv')('v1','YOUR_API_KEY');

openuv.uv({lat: 12.23, lng: 45.32}, (err, data) => {
  console.log(JSON.stringify(data, null, 2));
});
```

To get a UV Index forecast for a particular location call:

```javascript
var openuv = require('openuv')('v1','YOUR_API_KEY');

openuv.forecast({lat: 12.23, lng: 45.32}, (err, data) => {
  console.log(JSON.stringify(data, null, 2));
});
```

To get protection time for a particular location call:

```javascript
var openuv = require('openuv')('v1','YOUR_API_KEY');

openuv.protection({lat: 12.23, lng: 45.32}, (err, data) => {
  console.log(JSON.stringify(data, null, 2));
});
```

### Parameters
The `#uvindex()`,`#forecast()` and `#protection()` methods support passing additional options.
*Below are some examples, for all options consult [OpenUV API documentation](https://www.openuv.io).*

Example of requesting UV Index Forecast for a specific altitude for tomorrow:

```javascript
var openuv = require('openuv')('v1','YOUR_API_KEY');

var parameters = {
  lat: 12.23,
  lng: 45.32,
  alt: 4523,
  dt: moment().add('day',1).toISOString()
}

openuv.forecast(parameters, (err, data) => {
  console.log(JSON.stringify(data, null, 2));
});
```

## Contributing
* Fork the repo & commit changes

## Changelog

#### 0.1.0
-Initial release
