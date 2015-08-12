var fs = Npm.require('fs'),
request = Npm.require('request');

ImageSaver = {};

ImageSaver.key = "";

ImageSaver.download = function(uri, filename, sized, callback) {
  var output = fs.createWriteStream(filename);
  var r = request(uri);
  r.on('response',  function (res) {
    res.pipe(output);
    output.on('finish', function(){
        var input = fs.createReadStream(filename);
        var options = {
            uri : "https://api.tinify.com/shrink",
            headers: {
              "Authorization": "Basic " + new Buffer("api:" + ImageSaver.key).toString("base64"),
            }
        };
          input.pipe(request.post(options, function(err, res, body){
            console.log(body);
            if(res.headers.location) {
              var download = {
                uri : res.headers.location,
                headers: {
                  "Authorization": "Basic " + new Buffer("api:" + ImageSaver.key).toString("base64"),
                },
                json : {
                  resize : sized
                }
              }
              request.get(download).pipe(fs.createWriteStream(filename));
            } else {
              console.error(JSON.parse(body).message);
            }
          })
        );
    });
  });

};
