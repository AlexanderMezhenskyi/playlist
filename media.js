class Media {
    constructor(title, option, duration) {
        this.title = title;
        this.duration = duration;
        this.option = option;
        this.isPlaying = false;
    }

    play() {
        this.isPlaying = true;
    }

    stop() {
        this.isPlaying = false;
    }

    html() {
        return `<div class="row py-3 ${this.isPlaying ? 'current': ''}">
                    <div class="col-sm-6">${this.title} - ${this.option}</div>
                    <div class="col-sm-5">${this.duration}</div>
                    <button class="col-sm-1 btn btn-delete btn-danger btn-sm">Del</button>
                </div>`
    }
}