const playList = new PlayList(),
s1 = new Song('TEST', 'Tom', '03:12'),
s2 = new Song('TEST 1', 'Bill', '05:22'),
m1 = new Movie('Man of steel', 2012, '02:33:15');

playList.add(s1);
playList.add(s2);
playList.add(m1);

const list = document.getElementById('list');

playList.render(list);


const play = document.getElementById('btn-play'),
      stop = document.getElementById('btn-stop'),
      prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next');

play.addEventListener('click', function () {
    playList.play();
    playList.render(list);
    setDelHandler();
});

stop.addEventListener('click', function () {
    playList.stop();
    playList.render(list);
    setDelHandler();
});

prev.addEventListener('click', function () {
    playList.prev();
    playList.render(list);
    setDelHandler();
});

next.addEventListener('click', function () {
    playList.next();
    playList.render(list);
    setDelHandler();
});

function setDelHandler() {
    let del = document.querySelectorAll('.btn-delete');

    del.forEach(function (btn, index) {
        btn.addEventListener('click', function (event) {
            event.target.closest('.row').remove();
            playList.del(index, list);
        });
    });
}
setDelHandler();