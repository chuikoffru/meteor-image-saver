# Image Saver for Meteor
Сохранение изображений на сервер по URL, используя npm [request](https://www.npmjs.com/package/request)

## Установка
```
meteor add chuikoff:image-saver
```

##Использование

<pre>
ImageSaver.download(origin, destination, function() {
  return console.log('callback');
});
</pre>

##Пример

<pre>
ImageSaver.download(imageUrl, process.env.PWD + '/uploads/google.png', function() {
  return console.log('callback');
});
</pre>
