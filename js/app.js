$(document).ready(function(){
  
  for(var i = 0; i < icons.length; i++) {
    
    var iconfile = icons[i];

    var iconItem = $("<div class='icon-item'></div>");
    
    var iconImageWrapper = $("<div class='icon-image-wrapper'></div>");
    var iconImage = $("<img src='./svgs/" + iconfile + "'/>");

    iconImageWrapper.append(iconImage);

    var iconName = $("<div class='icon-name'><a href='./svgs/"+iconfile+"'>" + iconfile + "</a></div>");

    var iconClassName = "icon-" + iconfile.replace(".svg","");
    var iconClass = $('<div class="icon-class">class="' + iconClassName + '"</div>');

    iconItem.attr("name",iconfile.replace(".svg",""));
    iconItem.append(iconImageWrapper).append(iconName).append(iconClass);

    var iconCode = $('<div class="icon-code">content: "/????";</div>');
    iconItem.append(iconCode);

    var iconTest = $("<div class='test " + iconClassName.replace(".","") + "'/>");
    iconItem.append(iconTest);

    $(".dynamic-icon-list").append(iconItem);
  }

  setTimeout(function(){
    $(".icon-item").each(function(){
      var el = $(this).find(".test")[0];
      var code = getEntityCode(window.getComputedStyle(el,':before').content);
      $(this).find(".icon-code").text('content: "\\' + code + '";');
    });
  },10);

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


function getEntityCode(string) {
  var code = string.charCodeAt(1);
  var codeHex = code.toString(16);
  while (codeHex.length < 4) {
    codeHex = "0" + codeHex;
  }
  return codeHex;
}
