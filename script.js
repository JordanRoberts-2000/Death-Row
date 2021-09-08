//auto scroll down on refresh fix
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
$(window).on("load",function(){
  setTimeout(function () {
  $(".load").fadeOut("slow");
  }, 0);
});