class AssetManager {
    constructor() {
        this.successCount = 0;
        this.errorCount = 0;
        this.cache = [];
        this.downloadQueue = [];
    };

    queueDownload(path) {
        console.log("Queueing " + path);
        this.downloadQueue.push(path);
    };

    isDone() {
        return this.downloadQueue.length === this.successCount + this.errorCount;
    };

    downloadAll(callback) {
        if (this.downloadQueue.length === 0) setTimeout(callback, 10);
        for (var i = 0; i < this.downloadQueue.length; i++) {
            
            var that = this;
            var path = this.downloadQueue[i];
            console.log(path);
            var ext = path.substring(path.length - 3);

            switch(ext) {
                case "jpg":
                case "png":
                    var img = new Image();
                    img.addEventListener("load", function () {
                        console.log("Loaded " + this.src);
                        that.successCount++;
                        if (that.isDone()) callback();
                    });
        
                    img.addEventListener("error", function () {
                        console.log("Error loading " + this.src);
                        that.errorCount++;
                        if (that.isDone()) callback();
                    });
                    img.src = path;
                    this.cache[path] = img;
                    break;
            }    
        }
    };

    getAsset(path) {
        return this.cache[path];
    };
};
