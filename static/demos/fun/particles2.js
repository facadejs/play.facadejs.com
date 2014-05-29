var TO_RADIANS = Math.PI * 180,
    active = [],
    spread = 25,
    speed = 5,
    angle = spread,
    particle = new Facade.Circle({
        radius: 10,
        anchor: 'center'
    });

stage.draw(function () {

    this.clear();

    active.push({
        x: stage.width() / 2 + spread * Math.cos(angle),
        y: stage.height() / 2 - spread * Math.sin(angle),
        fillStyle: 'hsl(' + (active.length * 10) + ', 50%, 50%)'
    });

    angle += spread;

    active.forEach(function (options) {

        if (options.x > stage.width() / 2) {
            options.x += speed;
        } else {
            options.x -= speed;
        }

        if (options.y > stage.height() / 2) {
            options.y += speed;
        } else {
            options.y -= speed;
        }

        if (options.x > 0 && options.x < stage.canvas.width &&
            options.y > 0 && options.y < stage.canvas.height) {

            stage.addToStage(particle, options);

        }

    });

});
