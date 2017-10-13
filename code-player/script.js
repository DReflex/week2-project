$(document).ready(function(){
  var navHeight = $("#navbar").height();
  var height = $(window).height();
  $("#html-area").addClass("show");
  $("#html").addClass("button-clicked");

  $("textarea").height(height - navHeight + "px");
  $("iframe").height(height - navHeight + "px")

  $(".navbar-buttons button").on("click", toggle);

  $(".navbar-run button").on("click", function(){
    $(this).addClass("button-clicked", 200);
    showResults();
    setTimeout(function(){
      $(".navbar-run button").removeClass("button-clicked", 100)
    },150);

  })
  $("textarea").on("focus", label);


})
//functions

function toggle(){

  $(this).toggleClass("button-clicked");

  var id ="#" + this.id + "-area"
    $(id).toggleClass("show")
    var arr = filterClass()
    var width =""
    switch(arr.length){
      case 1:
       width = "98%"
       break;
      case 2:
      width = "48%"
      break;
      case 3:
      width= "32%";
      break
    }
    for (var i = 0; i < arr.length; i++) {
      $("#" + arr[i] + "-area").width(width)
    }
}

function showResults(){
  console.log($("#cssCode").val())
  $("iframe").contents().find("html")
  .html('<style>'+$("#cssCode").val()+'</style>'+$("#htmlCode").val())
  document.getElementById('iframe').contentWindow.eval($("#jsCode").val())
}

//functions for class
function filterClass(){
  var length = $(".navbar-buttons button").length
  var arr =[];
  for (var i = 0; i < length; i++) {

    var str = element($(".navbar-buttons button")[i])
    arr.push(str);
  }
  return arr.filter(Boolean)

}
function element (element){

  //console.log($("#" + element.id).attr("class"));
  if($("#" + element.id).attr("class").indexOf("button-clicked") !== -1){
    return element.id
  }

}

//
function label(){
  $(".label").show();
  $("#" + this.name + "-label").hide()
}
