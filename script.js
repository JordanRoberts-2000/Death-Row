//auto scroll down on refresh fix
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

/*$(window).on("load",function(){
  $(".load").fadeOut("slow");
  $(".item").css("opacity", "1");
  $(".item").css("transform", "scale(1)");
});*/
document.getElementById("videoBackground").addEventListener('loadeddata', (e) => {
  $(".load").fadeOut("slow");
  $(".item").css("opacity", "1");
  $(".item").css("transform", "scale(1)");
});
function gridHoverOn(a){
  $(".item:nth-child("+a+")").on("mouseover",function(){
    $(".item:nth-child("+a+")").css("transition-delay", "0");
    $(".item:nth-child("+a+")").css("transition", "2s");
    $(".item:nth-child("+a+")").css("background-size", "110% 110%");
    $(".item:nth-child("+a+")").css("z-index", "0");
    $(".item:nth-child("+a+") i").css("opacity", "1");
    $(".item:nth-child("+a+")").on("mouseleave",function(){
      $(".item:nth-child("+a+")").css("background-size", "100% 100%");
      $(".item:nth-child("+a+")").css("z-index", "1");
      $(".item:nth-child("+a+") i").css("opacity", "0");
    });
  });
};
//hover 
for (let i = 0; i < 1000; i++) {
  gridHoverOn(i);
}
//scroll
window.addEventListener("scroll", () => {
  var scroll = window.scrollY;
  console.log(scroll);
  if (scroll < 200){
    $("nav").css("width", "25%");
    $("main").css("width", "75%");
    $("#intro").css("opacity", "1");
    $("#intro").css("transition", "2.5s");
    $("#top input").css("opacity","1");
    $("#top input").css("transition","2.5s");
    $("#top input").css("flex","6");
    $("#search").css("flex","1");
    $("#header").css("opacity","1");
    $("#header").css("transition","4s");
    $("#icons ul").css("flex-direction","row");
    $("#middle").css("height", "73vh");
    $("#icons").css("height", "10vh");
  }else if(scroll > 200){
    $("nav").css("width", "5%");
    $("main").css("width", "95%");
    $("#intro").css("opacity", "0");
    $("#intro").css("transition", ".3s");
    $("#top input").css("opacity","0");
    $("#top input").css("transition",".3s");
    $("#top input").css("flex","1");
    $("#search").css("flex","99");
    $("#header").css("opacity","0");
    $("#header").css("transition",".3s");
    $("#icons ul").css("flex-direction","column-reverse");
    $("#middle").css("height", "43vh");
    $("#icons").css("height", "40vh");
  };
});
//
$("#top").on("mouseover",function(){
  $("nav").css("width", "25%");
  $("main").css("width", "75%");
  $("#intro").css("opacity", "1");
  $("#intro").css("transition", "2.5s");
  $("#top input").css("opacity","1");
  $("#top input").css("transition","2.5s");
  $("#top input").css("flex","6");
  $("#search").css("flex","1");
  $("#header").css("opacity","1");
  $("#header").css("transition","4s");
  $("#icons ul").css("flex-direction","row");
  $("#middle").css("height", "73vh");
  $("#icons").css("height", "10vh");
});
$("nav").on("mouseleave",function(){
  if(window.scrollY > 200){
    $("nav").css("width", "5%");
    $("main").css("width", "95%");
    $("#intro").css("opacity", "0");
    $("#intro").css("transition", ".3s");
    $("#top input").css("opacity","0");
    $("#top input").css("transition",".3s");
    $("#top input").css("flex","1");
    $("#search").css("flex","99");
    $("#header").css("opacity","0");
    $("#header").css("transition",".3s");
    $("#icons ul").css("flex-direction","column-reverse");
    $("#middle").css("height", "43vh");
    $("#icons").css("height", "40vh");
  };
});