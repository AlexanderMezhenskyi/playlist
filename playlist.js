function PlayList(){
    this.songs = [];
    this.currentIndex = 0;
}

PlayList.prototype.add = function(song){
    this.songs.push(song);
};
PlayList.prototype.play = function(){
    let song = this.songs[this.currentIndex];

    song.play();
};
PlayList.prototype.stop = function(){
    let song = this.songs[this.currentIndex];

    song.stop();
};
PlayList.prototype.prev = function(){
    let song;

    this.stop();
    this.currentIndex--;

    if(this.currentIndex < 0){
        this.currentIndex = this.songs.length - 1;
    }

    song = this.songs[this.currentIndex];
    song.play();
};
PlayList.prototype.next = function(){
    let song;

    this.stop();
    this.currentIndex++;

    if(this.currentIndex === this.songs.length){
        this.currentIndex = 0;
    }

    song = this.songs[this.currentIndex];
    song.play();
};
PlayList.prototype.del = function(index){
    this.currentIndex = 0;
    this.songs.splice(index, 1);
};
PlayList.prototype.render = function(list){
    list.innerHTML  = '';

    return this.songs.forEach(song => {
        list.innerHTML += song.html();
    })
};

