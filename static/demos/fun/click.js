var active = [],
    rect = new Facade.Rect({
        width: 100,
        height: 100,
        anchor: 'center'
    }),
    count = new Facade.Text('Count: 0', {
        x: stage.width() - 20,
        y: 20,
        fontFamily: 'Helvetica',
        fontSize: 20,
        anchor: 'right'
    }),
    instructions = new Facade.Text('Click/Touch anywhere to add\nan object to the stage.', {
        x: stage.width() / 2,
        y: stage.height() / 2,
        fontFamily: 'Helvetica',
        fontSize: 20,
        textAlignment: 'center',
        anchor: 'center'
    });

stage.draw(function () {

    this.clear();

    if (active.length) {

        active.forEach(function (options) {

            options.rotate++;

            stage.addToStage(rect, options);

        });

    } else {

        this.addToStage(instructions);

    }

    this.addToStage(count);

});

function handleListener (e) {

    if (e instanceof TouchEvent) {

        e = e.targetTouches[0];
    }

    active.push({
        x: e.pageX,
        y: e.pageY,
        rotate: 0,
        fillStyle: 'hsl(' + (active.length * 10) + ', 50%, 50%)'
    });

    count.setText('Count: ' + active.length);

}

if ('ontouchstart' in document.documentElement) {

    stage.canvas.addEventListener('touchstart', handleListener);

} else {

    stage.canvas.addEventListener('click', handleListener);

}
