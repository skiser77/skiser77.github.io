let images = document.querySelectorAll('.slide');
let bottomimages = document.querySelectorAll('.slideshowbottom');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slideIndex = 0;





showSlides(slideIndex);

for (let i = 0; i < bottomimages.length; i++){
    bottomimages[i].addEventListener('click', function(){changeSlide(i)})
}



function showSlides(index){
    for(let i = 0; i < images.length; i++)
    {
        if (i === index){
            images[i].style.display = 'block';
            bottomimages[i].style.opacity = '1'
        }
        else{
            images[i].style.display = 'none';
            bottomimages[i].style.opacity = '0.5'
        }
    }
}

function changeSlide(n){
    slideIndex = n;
    showSlides(n);
}

function nextSlide(){
    slideIndex++;
    if(slideIndex > images.length - 1)
    {
        slideIndex = 0;
    }
    showSlides(slideIndex);
}

function prevSlide(){
    slideIndex--;
    if(slideIndex < 0)
    {
        slideIndex = images.length - 1;
    }
    showSlides(slideIndex);
}

next.addEventListener('click', function() {nextSlide()});
prev.addEventListener('click', function() {prevSlide()});

