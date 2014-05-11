var group = new Facade.Group({
    x: stage.width() / 2,
    y: stage.height() / 2,
    anchor: 'center'
});

group.addToGroup(new Facade.Rect({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    lineWidth: 10,
    strokeStyle: '#333E4B',
    fillStyle: '#1C73A8',
    anchor: 'top/left'
}));

group.addToGroup(new Facade.Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    lineWidth: 10,
    strokeStyle: '#333E4B',
    fillStyle: '#1C73A8',
    anchor: 'top/left'
}));

stage.draw(function () {

    this.clear();

    this.addToStage(group);

    // debugBoundingBox(group);

});
