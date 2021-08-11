var accordion=document.getElementsByClassName('accordion')
var i;
for(i=0;i<accordion.length;i++){
    accordion[i].addEventListener('click',function(){
        this.classList.add("active");
        var panel=this.nextElementSibling;
        console.log()
        if(panel.style.display==="block"){
            panel.style.display="none";
            console.log("saam ekm")
        }else{
            panel.style.display="block";
            console.log("saam ekm2")
        }
    });
}
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:true
        }
    }
})