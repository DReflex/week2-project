$(document).ready(function(){
  var navHeight = $("#navbar").height();
  var height = $(window).height();
  $("#html-area").addClass("show");
  $("#html").addClass("button-clicked");
  if($(window).width() < 620){
    $("textarea").height((height - navHeight)*.6 + "px");
    $("iframe").height((height - navHeight)*.6 + "px");
    console.log("hello");
  }else{
    $("textarea").height(height - navHeight-50 + "px");
    $("iframe").height(height - navHeight -10 + "px")

  }

  $(".navbar-buttons button").on("click", toggle);
  $("#result").on("click", toggleResult)
  $(".navbar-run button").on("click", function(){
    $(this).addClass("button-clicked", 200);
    showResults();
    setTimeout(function(){
      $(".navbar-run button").removeClass("button-clicked", 100)
    },150);

  })


 var show = true;

//functions
function toggleResult(){
  $("#result-frame").toggleClass("show")
  $(this).toggleClass("button-clicked")
  if (show) {
    if($(window).width() < 620){
      $("textarea").height((height - navHeight)*.5 + "px")

    }else
      $("textarea").height((height - navHeight)*.7 + "px")
  }else {
    if($(window).width() < 620){
      $("textarea").height((height - navHeight)*.6 + "px")

    }else
    $("textarea").height(height - navHeight-50 + "px");
  }

  show = !show


}
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
      case 4:
      width = "32%"
      break
    }
    for (var i = 0; i < arr.length; i++) {
      $("#" + arr[i] + "-area").width(width)
    }
}

function showResults(){
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

  if($("#" + element.id).attr("class").indexOf("button-clicked") !== -1){
    return element.id
  }

}


})
