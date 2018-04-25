"use strict";

var https = require("https");
var StringDecoder = require('string_decoder').StringDecoder;


exports.getFile = function(req, res) {
  var fileSize = Number(req.file.size);
  var result = null;
  if (fileSize < 1000) result = fileSize + ' bytes';
  else if (fileSize < 1000000) result = (fileSize/1000).toFixed(2) + ' KB';
  else result = (fileSize/1000000).toFixed(2) + ' MB';
  console.log(req.file);
  var size = {
    size: result
  }
  res.send(JSON.stringify(size));
}