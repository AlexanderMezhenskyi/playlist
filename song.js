function Song(title, artist, duration) {
    this.artist = artist;
    Media.call(this, title, duration);
}
Song.prototype = Object.create(Media.prototype);
Song.prototype.constructor = Song; 

Song.prototype.html = function(){
    return `<div class="row py-3 ${this.isPlaying ? 'current': ''}">
                <div class="col-sm-6">${this.title} - ${this.artist}</div>
                <div class="col-sm-5">${this.duration}</div>
                <button class="col-sm-1 btn btn-delete btn-danger btn-sm">Del</button>
            </div>`
};