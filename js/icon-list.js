$(document).ready(function(){
  
  for(var i = 0; i < icons.length; i++) {
    
    var iconfile = icons[i];

    var iconItem = $("<div class='icon-item'></div>");
    var iconImage = $("<img src='./svgs/" + iconfile + "'/>");
    var iconName = $("<div class='icon-name'>" + iconfile + "</div>");


    var iconClassName = ".icon-" + iconfile.replace(".svg","");
    var iconClass = $("<div class='icon-class'>" + iconClassName + "</div>");

    iconItem.attr("name",iconfile.replace(".svg",""));
    iconItem.append(iconImage).append(iconName).append(iconClass);

    // var iconTest = $("<div class='test " + iconClassName.replace(".","") + "'/>");
    // iconItem.append(iconTest);


    $(".dynamic-icon-list").append(iconItem);
  }

  // Search for icons when someone types
  $(".search-ui input").on("keyup",function(){
    var searchTerm = $(this).val();    
    searchIcons(searchTerm);
  })

});

// Searches for icons that have the term in their name
function searchIcons(term){

  $(".icon-item").show();

  if(term.length == 0) {
    return;
  }

  term = term.trim();
  term = term.toLowerCase();
  
  $(".icon-item").each(function(){
    var iconName = $(this).attr("name");
    var index = iconName.indexOf(term);
    if(index < 0) {
      $(this).hide();
    } 
  });
}
