var ourgoal = document.querySelector('.ourgoal')
var close = document.querySelector('.close')
if(window.localStorage.getItem('ourgoal') !== null){
    ourgoal.style.display = 'none'

}
close.onclick = ()=>{
    ourgoal.style.display = 'none'
    window.localStorage.setItem('ourgoal', 'show')
}