var fs, request;            

fs = Npm.require('fs');
request = Npm.require('request');

ImageSaver = {};

ImageSaver.download = function(uri, filename, callback) {
  return request.head(uri, function(err, res, body) {
    if (err) {
      console.log(err);
      return;
    }
    return request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};
