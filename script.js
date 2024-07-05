const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elemi = document.querySelectorAll(".elemi")
var elem2 = document.querySelector("#elem2")
var elem5 = document.querySelector("#elem5")
var elem7 = document.querySelector("#elem7")
var fixedimg = document.querySelector("#fixed-img")
var fixedvid1 = document.querySelector("#vid-1")
var fixedvid2 = document.querySelector("#vid-2")
var fixedvid3 = document.querySelector("#vid-3")

elemi.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixedimg.style.display = "block"
        fixedimg.style.backgroundImage = `url(${image})`
    })
})
elemi.forEach(function(e){
    e.addEventListener("mouseleave",function(){
        fixedimg.style.display = "none"
    })
})


elem5.addEventListener("mouseenter",function(){
    fixedvid2.style.display = "block"
})
elem5.addEventListener("mouseleave",function(){
    fixedvid2.style.display = "none"
})


elem2.addEventListener("mouseenter",function(){
    fixedvid1.style.display = "block"
})
elem2.addEventListener("mouseleave",function(){
    fixedvid1.style.display = "none"
})


elem7.addEventListener("mouseenter",function(){
    fixedvid3.style.display = "block"
})
elem7.addEventListener("mouseleave",function(){
    fixedvid3.style.display = "none"
})