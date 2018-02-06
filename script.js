$(document).ready(function() {
  var table_number = 0;
  //step 1: when clicking on a table hide and show form
  $(".available").on("click", function() {
    $tablenumber = $(event.target).text();
    $(".num").html($tablenumber);
    $(".form").toggleClass("show");
    $(".form").toggleClass("hide");
    table_number = $(this).attr("id");
  })

  //step 2: when you submit the form, should change the table to being unavailable
  $("#saveButton").on("click", function() {
    $("#" + table_number).css("background-color","#ADAAAA");
    //step 4: change cursor property to not allowed if reserved table
    $("#" + table_number).css("cursor", "not-allowed");
    $(".form").toggleClass("hide");
  })
  //step 3: when you click on the x, hide the form
  $("#close").on("click", function() {
    $(".form").toggleClass("hide");
  })

});
