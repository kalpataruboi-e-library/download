function get25(book_25, link) {
    var bookid = document.querySelectorAll('.bookid')
    for (var i = 0; i < bookid.length; i++) {
        if(bookid[i].getAttribute('href').includes(book_25)){
            bookid[i].setAttribute('href', `${link}`)
        }
    }
}