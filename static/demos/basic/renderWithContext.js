stage.draw(function () {

    this.clear();

    this.renderWithContext({
        translate: [this.width() / 2 - 100, this.height() / 2 - 100],
        fillStyle: '#1C73A8',
        fillRect: [0, 0, 200, 200],
        lineWidth: 10,
        strokeStyle: '#333E4B',
        strokeRect: [0, 0, 200, 200]
    });

});
