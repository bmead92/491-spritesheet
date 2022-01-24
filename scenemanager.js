class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;
        this.link = {x: 0, y:0};
        this.loadLevel();
    };

    loadLevel() {
        
        this.lyra = new Link(this.game, 400, 350, ASSET_MANAGER.getAsset("./linkspritesheet.png"));
        this.game.addEntity(this.Link);

    };

    update() {
        PARAMS.DEBUG = document.getElementById("debug").checked;
        let midpoint = { x : PARAMS.CANVAS_WIDTH / 2 - PARAMS.BLOCKWIDTH / 2, y : PARAMS.CANVAS_HEIGHT / 2 - PARAMS.BLOCKWIDTH / 2 };
        this.x = this.Link.x - midpoint.x;
        this.y = this.Link.y - midpoint.y;
    };

    draw(ctx) {

    };

}
