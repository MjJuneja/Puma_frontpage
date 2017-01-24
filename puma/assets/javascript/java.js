$(window).scroll(function(){
  $("#sticky-anchor").stop().animate({"marginTop": ($(window).scrollTop()) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "slow" );
});
var totaltext = "";
for (var i = 0; i < 100; i++) {
  totaltext += "scroll!<br />";
}
$("#stick").html(totaltext);