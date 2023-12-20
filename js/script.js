/*=========================== Toggle icon navbar ==================================== */
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}


/*=========================== Scroll Section Active link ==================================== */
let Section =document.querySelectorAll('section');
let navLink =document.querySelectorAll('header nav a');

window.onscroll = () =>{
    Section.forEach(sec =>{
        let top =window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLink.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' +id+']').classList.add('active');
        })
        }
    })

    /*=========================== Sticky navbar ==================================== */

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrolly > 100)
}

/*=========================== Scroll revel ==================================== */

ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img ', { origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });

/*=============================== Service FileSee More ==============================*/

function moreless(){
    var dots = document.getElementById("dots");
    var content = document.getElementById("content");
    var btnText = document.getElementById("btn");
    if(dots.style.display!="none"){
        dots.style.display="none";
        content.style.display="inline";
        btnText.innerHTML="Read Less";
    }else{
        dots.style.display="inline";
        content.style.display="none";
        btnText.innerHTML="Read More";
    }
}
function moreless1(){
    var dots = document.getElementById("dots1");
    var content = document.getElementById("content1");
    var btnText = document.getElementById("btn1");
    if(dots.style.display!="none"){
        dots.style.display="none";
        content.style.display="inline";
        btnText.innerHTML="Read Less";
    }else{
        dots.style.display="inline";
        content.style.display="none";
        btnText.innerHTML="Read More";
    }
}

    /*$(document).ready(function(){
    $("#btn").click(function(){
        $("#content").toggle(1000);
    })
})*/