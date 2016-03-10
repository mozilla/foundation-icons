$(document).ready(function(){
  var maxSize = 310;

  $(".auto-size").on("mousemove",function(e){
    var percentage = Math.sqrt(Math.pow(e.offsetX,2) + Math.pow(e.offsetY,2));
    percentage = percentage / 490;

    var fontSize = percentage * maxSize;
    if(fontSize > maxSize) {
      fontSize = maxSize;
    }

    if(fontSize > 100) {
      $(".auto-size .icon").removeClass("icon-bookmark-small").addClass("icon-bookmark");
    } else {
      $(".auto-size .icon").removeClass("icon-bookmark").addClass("icon-bookmark-small");
    }

    $(".auto-size span").css("font-size", fontSize + "px");

  })
});