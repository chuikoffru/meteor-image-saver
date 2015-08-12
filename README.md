# Image Saver for Meteor
Сохранение изображений на сервер по URL, используя npm [request](https://www.npmjs.com/package/request) ,
а так же изменение размеров, и сжатие изображений без потери качества с помощью API TinyPNG.

## Установка
```
meteor add chuikoff:image-saver
```

##Использование

<pre>
ImageSaver.key = ""; // API key for https://tinypng.com/developers
ImageSaver.download(origin, destination, sized, function() {
  return console.log('callback');
});
</pre>

##Пример

<pre>
ImageSaver.download(imageUrl, process.env.PWD + '/uploads/google.png', {width : 200}, function() {
  return console.log('callback');
});
</pre>
