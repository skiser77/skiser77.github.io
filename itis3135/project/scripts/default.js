let form = document.getElementById('form');
let submitbutton = document.getElementById('submitbutton');

const attributes = document.querySelector('.attributes');
const legend = document.querySelector('.legend');

const rosterbutton = document.getElementById('rosterbutton');
let allTextElements = document.querySelectorAll('body *');

let visible = false;

const smaller = document.getElementById('smaller');
const bigger = document.getElementById('bigger');


window.addEventListener('load', function(){
    legend.style.display='none';
    attributes.style.display='none';
})

if(rosterbutton){
    rosterbutton.addEventListener('click', function(){
        if(visible === false)
        {
            rosterbutton.innerText = 'Click to Hide Legend'
            visible = true;
            attributes.style.display = 'inline-block';
            legend.style.display = 'inline-block';
        }else{
            rosterbutton.innerText = 'Click to Show Legend'
            visible = false;
            attributes.style.display = 'none';
            legend.style.display = 'none';
        }
    });
}


if (submitbutton){
    submitbutton.addEventListener('click', function(){
        form.innerHTML = '<p>Thank you for submitting the form!</p>';
    })
}

if(bigger){
    bigger.addEventListener('click', function(){
        allTextElements.forEach(element => {
            let currentFontSize = window.getComputedStyle(element).fontSize;
            

            let newFontSize = parseFloat(currentFontSize) + 1;
            
            
            element.style.fontSize = newFontSize + 'px';
        });
    })
}

if(smaller){
    smaller.addEventListener('click', function(){
        allTextElements.forEach(element => {
            let currentFontSize = window.getComputedStyle(element).fontSize;
            

            let newFontSize = parseFloat(currentFontSize) - 1;
            
            
            element.style.fontSize = newFontSize + 'px';
        });
    })
}





