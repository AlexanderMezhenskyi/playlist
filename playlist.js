class PlayList {
    constructor() {
        this.songs = [];
        this.currentIndex = 0;
    }

    add(song) {
        this.songs.push(song);
    }

    play() {
        let song = this.songs[this.currentIndex];

        this.songs.length ? song.play() : alert(`The PlayList is empty!`);
    }

    stop() {
        let song = this.songs[this.currentIndex];

        this.songs.length ? song.stop() : alert(`The PlayList is empty!`);
    }

    prev() {
        let song;

        if (this.songs.length) {
            this.stop();
        } else {
            alert(`The PlayList is empty!`);
            return false;
        }

        this.currentIndex--;

        if(this.currentIndex < 0){
            this.currentIndex = this.songs.length - 1;
        }

        song = this.songs[this.currentIndex];

        song.play()
    }

    next() {
        let song;

        if (this.songs.length) {
            this.stop();
        } else {
            alert(`The PlayList is empty!`);
            return false;
        }

        this.currentIndex++;

        if(this.currentIndex === this.songs.length){
            this.currentIndex = 0;
        }

        song = this.songs[this.currentIndex];

        song.play()
    }

    del(index) {
        if (index === this.songs.length - 1 && index === this.currentIndex) {
            this.currentIndex -= 1
        }

        this.songs.splice(index, 1);

        this.render(list);
        setDelHandler();
    }

    render(list) {
        list.innerHTML  = '';

        return this.songs.forEach(song => {
            list.innerHTML += song.html();
        })
    }
}