
$(document).ready(function(){
  $("button.buy").click( function() {
    $(".card").toggle();
    moonName = $(this).val();
    $("#product").text(moonName);
  });

  $("#submitForm").click(function(event) {
    let paymentInfoFull = $("#paymentInfo").val();
    $("#buyerName").append($("#name").val());
    $(".titleProduct").append(moonName);
    $("#cardLastFive").append(paymentInfoFull.substr(-5));
    $("#payment").toggle();
    $("#receipt").toggle();

    event.preventDefault();
  });
});