let gameEngine = new GameEngine();

let ASSET_MANAGER = new AssetManager();

// sprites
ASSET_MANAGER.queueDownload("./linkspritesheet.png");

ASSET_MANAGER.downloadAll( function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	ctx.imageSmoothingEnabled = false;

	gameEngine.init(ctx);

    gameEngine.addEntity(new Link(gameEngine));
	
	gameEngine.start();
});
