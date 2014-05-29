var active = [],
    particle = new Facade.Circle({
        radius: 10,
        anchor: 'center'
    });

stage.draw(function () {

    this.clear();

    active.push({
        x: stage.width() / 2,
        y: stage.height() / 2,
        fillStyle: 'hsl(' + (active.length * 10) + ', 50%, 50%)',
        speed: [
            Math.random() * 20 -10,
            Math.random() * 20 -10
        ]
    });

    active.forEach(function (options) {

        options.x = options.x + options.speed[0];
        options.y = options.y + options.speed[1];

        if (options.x > 0 && options.x < stage.canvas.width &&
            options.y > 0 && options.y < stage.canvas.height) {

            stage.addToStage(particle, options);

        }

    });

});
