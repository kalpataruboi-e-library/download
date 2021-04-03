function insertbook(pitaka, booklist, path, mainpath) {
    var arr = []
    for (var i = 0; i < booklist.length; i++) {
        arr.push(`<div id="${booklist[i]}" class="bookbox">
        <div class="bookname"><span >${booklist[i]} </span><span>   
        <a  class="bookid" href="https://github.com/kalpataruboi/${mainpath}/raw/master/${path}/${booklist[i]}">ডাউনলোড</a></span></div>
        </div>`)
    }
    pitaka.innerHTML = arr.join(' ')

    var bookbox = document.querySelectorAll('.bookbox')
    for(var i = 0; i <bookbox.length; i++){
        bookbox[i].setAttribute('id', `tpbangla${i}`)
    }
}

function insertbook2 (pitaka, booklist, mainpath, id){
    var arr = []
    for (var i = 0; i < booklist.length; i++) {
        arr.push(`<div id="${id + i}" class="bookbox">
        <div class="bookname"><span >${booklist[i]} </span><span>   
        <a  class="bookid" href="https://github.com/kalpataruboi/${mainpath}/raw/master/${booklist[i]}">ডাউনলোড</a></span></div>
        </div>`)
        //console.log(booklist.length)

    }

  
    //https://github.com/kalpataruboi/03.Atthakatha_Bangla/raw/master/bookname.pdf
    pitaka.innerHTML = arr.join(' ')
}

function insertbook3 (pitaka, booklist, mainpath, id){
    var arr = []
    for (var i = 0; i < booklist.length; i++) {
        arr.push(`<div id="${id + i}" class="bookbox">
        <div class="bookname"><span >${booklist[i]} </span><span>   
        <a  class="bookid" href="https://github.com/kalpataruboiChakma/${mainpath}/raw/master/${booklist[i]}">ডাউনলোড</a></span></div>
        </div>`)
        //console.log(booklist.length)

    }

  
    //https://github.com/kalpataruboi/03.Atthakatha_Bangla/raw/master/bookname.pdf
    pitaka.innerHTML = arr.join(' ')
}
