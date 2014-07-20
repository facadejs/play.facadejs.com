var group = new Facade.Group({
        x: stage.width() / 2,
        y: stage.height() / 2,
        anchor: 'center'
    }),
    octocat = new Facade.Image('images/octocat.png'),
    octocat_retina = new Facade.Image('images/octocat@2x.png', {
        scale: 0.5
    }),
    label = new Facade.Text('Click to see non-retina image', {
        x: 189,
        y: 370,
        anchor: 'center'
    });

octocat_retina.image.addEventListener('load', function () {

    group.addToGroup(octocat_retina);

});

group.addToGroup(label);

stage.draw(function () {

    this.clear();

    this.addToStage(group);

});

function handleListener () {

    if (group.hasEntity(octocat)) {

        group.removeFromGroup(octocat);

        group.addToGroup(octocat_retina);

        label.setText('Click to see non-retina image');

    } else {

        group.removeFromGroup(octocat_retina);

        group.addToGroup(octocat);

        label.setText('Click to see retina image');

    }

}

if ('ontouchstart' in document.documentElement) {

    stage.canvas.addEventListener('touchstart', handleListener);

} else {

    stage.canvas.addEventListener('click', handleListener);

}
