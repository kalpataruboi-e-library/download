function insertbook(pitaka, booklist, path) {
    var arr = []
    for (var i = 0; i < booklist.length; i++) {
        arr.push(`<div class="bookbox">
        <div class="bookname"><span >${booklist[i]} </span><span>   
        <a  class="bookid" href="https://github.com/kalpataruboi/02.Mul_Tripitak_Bangla/raw/master/${path}/${booklist[i]}">ডাউনলোড</a></span></div>
        </div>`)
    }
    pitaka.innerHTML = arr.join(' ')
}
