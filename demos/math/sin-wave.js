var circle = new Facade.Circle({
        radius: 10,
        anchor: 'center'
    }),
    iteration = 0,
    spread = stage.height() / 3,
    speed = 50,
    color = 0;

stage.draw(function () {

    var y = spread * Math.sin(iteration) + stage.height() / 2;

    iteration += Math.PI / speed;

    color++;

    // this.clear();

    if (circle.getOption('x') > stage.width()) {

        circle.setOptions({ x: 0, y: y, fillStyle: 'hsl(' + color + ', 50%, 50%)' });

    } else {

        circle.setOptions({ x: '+=5', y: y, fillStyle: 'hsl(' + color + ', 50%, 50%)' });

    }

    this.addToStage(circle);

});
