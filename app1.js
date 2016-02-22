$(document).ready(function(){

  var currentStep = 0;

  $("#step1").hide();
  $("#step2").hide();

  $("#btnStep1").click(function(){

    $("#step1").show();
    $("#step2").hide();

    currentStep = 1;
    // update the db
  });

  $("#btnStep2").click(function(){

    $("#step1").hide();
    $("#step2").show();

    currentStep = 2;
    // update the db
  });
  console.log($("h1").attr("ng-reply"));  // ng-attribute on the h1 is a custom attribute that I created


});
