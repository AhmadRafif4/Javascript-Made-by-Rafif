//const cat = $("p")
//const Cat1 = document.getElementsByTagName("p")
//const Cat2 = document.querySelector("p")

//const Cat = $("Saya")
//const Cat = $(".Suka-Kucing")

//console.log(Cat)

// .html()
//const Cat = $("#Text")
//Cat.html("Roogle")

// .attr()
//const inp = $("input")
//inp.attr("type", "checkbox")

// .Add & Remove Class
//Cat.addClass("red green yelow")

//Cat.removeClass()

// css()
//inp.css({
    //border: "2px solid red",
    //marginLeft: "20px"
//})

// Cara JavaScript
//const cat = document.getElementById("text")
//cat.addEventListener("mouseenter", function() {
//  cat.style.border = "1px solid red"
//})

// Cara jQuery
//const cat = $("#text")
//cat.mouseenter(function () {
//    cat.css("border", "1px solid red")
//})

const btnTunjukkan = $("#show")
const btnSembunyi = $("#hide")
const btnMuncul = $("#fadeIn")
const btnMenghilang = $("#fadeOut")
const btnShowdanHide = $("#toggle")

const div = $("div")

btnTunjukkan.click(function() {
    div.show("slow")
})

btnSembunyi.click(function() {
    div.hide("slow")
})

btnMuncul.click(function() {
    div.fadeIn("slow")
})

btnMenghilang.click(function () {
    div.fadeOut("slow")
})

btnShowdanHide.click(function() {
    div.slideToggle("slow")
})