let whatlink = document.getElementById('whatlink');
let wholink = document.getElementById('wholink');
let whenlink = document.getElementById('whenlink');
let wherelink = document.getElementById('wherelink');
let howlink = document.getElementById('howlink');
let whylink = document.getElementById('whylink');
let ailink = document.getElementById('ailink');

let what = document.getElementById('what');
let who = document.getElementById('who');
let when = document.getElementById('when');
let where = document.getElementById('where');
let how = document.getElementById('how');
let why = document.getElementById('why');
let ai = document.getElementById('ai');

let pages = [what, who, when, where, how, why, ai]

whatlink.addEventListener('click', function() {newPage(0)});
wholink.addEventListener('click', function() {newPage(1)});
whenlink.addEventListener('click', function() {newPage(2)});
wherelink.addEventListener('click', function() {newPage(3)});
howlink.addEventListener('click', function() {newPage(4)});
whylink.addEventListener('click', function() {newPage(5)});
ailink.addEventListener('click', function() {newPage(6)});

window.onload = loadPage()

function loadPage(){
    for(let i = 0; i < pages.length; i++){
        if (i == 0){
            pages[i].style.display = "block";
        }
        else{
            pages[i].style.display = "none";
        }
    }
}

function newPage(index){
    for(let i = 0; i < pages.length; i++){
        if (i == index){
            pages[i].style.display = "block";
        }
        else
        {
            pages[i].style.display = "none";
        }
    }
}
