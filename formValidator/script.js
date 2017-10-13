$(document).ready(function(){

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  $("#form").submit(function(e){
    e.preventDefault();
    var errors;
    console.log($.isNumeric($("#phone").val()));

    if (!validateEmail($("#email").val())) {
      errors = "There is error";
      $("#email").css("border", "2px solid red")
    }else{
      $("#email").css("border", "1px solid rgb(176, 176, 176)")
      errors=""
    }
    if (!$.isNumeric($("#phone").val())) {
      errors = "There is error";
      $("#phone").css("border", "2px solid red")
    }else{
      $("#phone").css("border", "1px solid rgb(176, 176, 176)")
      errors=""
    }

    if ($("#pass1").val()!=$("#pass2").val()) {
      errors = "There is error";
      $("#pass2").css("border", "2px solid red")
    }else{
      $("#pass2").css("border", "1px solid rgb(176, 176, 176)")
      errors=""
    }

    if(errors != false){
      $("#error").text(errors)
    }else{
      $("#form").fadeOut()
    }

  })
})
