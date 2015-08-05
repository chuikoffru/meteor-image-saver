Package.describe({
  name: 'chuikoff:image-saver',
  version: '0.0.1',
  summary: 'Save images to server from url',
  git: 'https://github.com/chuikoffru/meteor-image-saver',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.export('ImageSaver', 'server');
  api.versionsFrom('1.1.0.2');
  api.addFiles('image-saver.js', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('chuikoff:image-saver');
  api.addFiles('image-saver-tests.js');
});

Npm.depends({
  'request': '2.55.0',
});
