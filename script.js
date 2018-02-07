$(document).ready(function() {
  var table_number;
  //when clicking on a table hide and show form
  $(".available").on("click", function() {
    $tablenumber = $(event.target).text();
    $(".num").html($tablenumber);
    // takes the form and fades it in instead of hide show
    $( ".form" ).fadeIn( "fast" );
    //$(".form").toggleClass("show");
    //$(".form").toggleClass("hide");
    table_number = $(this).attr("id");
    //added line below- adds the number to the form that you're on
    $(".table available").text(table_number);
  })
  //when you submit the form, should change the table to being unavailable
  $("#saveButton").on("click", function() {
    $("#" + table_number).addClass("reserved");
    //$(".form").toggleClass("hide"); fadeOut does same thing
    // takes the form and fades out
    $( ".form" ).fadeOut( "fast" );
    //added 2 lines below, variables...
    var name = $(".name").val();
    var number = $(".size-of-party").val();
    //get value of inputs in the console
    $("#" + table_number).append("<div class='hover'><p>Name: "+ name +" </p><p> Size of party : " + number +"  </p></div>");
    console.log($(".name").val(), $(".size-of-party").val());
  })
  //when you click on the x, hide the form THIS WORKS!!!
  $("#close").on("click", function() {
    //$(".form").toggleClass("hide"); fade out does same thing
    $( ".form" ).fadeOut( "fast" );
  })

});
