class Link {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./linkspritesheet.png"), 0, 1, 24, 24, 5, 1, false, true);
    };

    update() {

    };
        draw(ctx) {
          this.animator.drawFrame(this.game.clockTick, ctx, 400, 350, 3);
        }
    };
