function Animation(id, fps, urls) {

    this.imageId = id;                      // id элемента img
    this.fps = 1000 / fps;                  // скорость смены кадров в секунду
    this.imgElement = null;                 // элемент img в котором будет воспроизводиться анимация
    this.frames = new Array(urls.length);   // массив с загруженными изображениями.

    this.loadedFrames = 0;                  // количество загруженных изображений
    this.isLoaded = false;                  // true если все изображения загружены
    this.currentFrame = -1;                 // текущее изображение, которое должно отображаться из массива frames
    this.timer = null;                      // объект таймера, который будет создан через setInterval
    this.startOnLoad = false;               // true если анимация должна запуститься сразу после загрузки всех изображений

    // загрузка изображений
    for (var i = 0; i < urls.length; i++) {
        this.frames[i] = new Image();
        this.frames[i].onload = countLoaded; // после загрузки изображения увеличить счетчик loadedFrames
        this.frames[i].src = urls[i];
    }

    var current = this;

    function countLoaded() {
        current.loadedFrames++;
        if (current.loadedFrames == urls.length) {
            current.isLoaded = true; // все изображения загружены
            if (current.startOnLoad) current.start(); // запустить анимацию если startOnLoad true
        }
    }

    // нижнее подчеркивание в имени метода указывает на то что он предназначен только для внутреннего использования.
    // пользователь объекта Animation не должен запускать этот метод самостоятельно.
    this._nextFrame = function () {
        // при запуске метода через setInterval this будет ссылаться на window
        // поэтому вместо ссылки this используется переменная current
        current.currentFrame = (current.currentFrame + 1) % current.frames.length;
        current.imgElement.src = current.frames[current.currentFrame].src;
    }
}

// метод для запуска анимации
Animation.prototype.start = function () {
    if (this.timer) return;

    if (!this.isLoaded) {
        this.startOnLoad = true;
    }
    else {
        if (!this.imgElement) {
            this.imgElement = document.getElementById(this.imageId);
        }
        this._nextFrame();
        this.timer = setInterval(this._nextFrame, this.fps);
    }
}

// метод для остановки анимации
Animation.prototype.stop = function () {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
}