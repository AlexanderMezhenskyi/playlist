function Movie(title, year, duration) {
    this.year = year;
    Media.call(this, title, duration);
}
Movie.prototype = Object.create(Media.prototype);
Movie.prototype.constructor = Movie; 

Movie.prototype.html = function(){
    return `<div class="row py-3 ${this.isPlaying ? 'current': ''}">
                <div class="col-sm-6">${this.title} - ${this.year}</div>
                <div class="col-sm-5">${this.duration}</div>
                <button class="col-sm-1 btn btn-delete btn-danger btn-sm">Del</button>
            </div>`
};