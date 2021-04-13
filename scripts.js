// sortable
$(function () {
  $(".sortable1, .sortable2, .sortable3, .sortable4, .sortable5").sortable({
    connectWith: ".connectedSortable"
  }).disableSelection();

  $("#datepicker").datepicker();

  // Submit task
  $("#submitBtn").click(function () {
    // $( "#tabs" ).tabs();
    var taskList = $("#text").val();
    // console.log("click", taskList);
    var dsc = $("#description").val();
    var date = $("#datepicker").val();
    $("#tabs").tabs();
    //append input to the list
    $(".sortable1").append(
      "<li class='card'>" + "Title:" + taskList + " " + "<br>" +
      "Description:" + dsc + "<span> </span> " + "<br>" +
      "Date:" + date + "</li>");

    $(".card").click(function () {
      var infoText = $(this).text();
      $('#dialog').html(infoText);
      $('#dialog').dialog();
    });

  });

  $(document).ready(function () {
    $("#submitBtn").click(function () {
      var x = $(".link-div").serializeArray();
      $.each(x, function (i, field) {
        $("#output").append(field.name + ":" + field.value + " ");
      });

      // dialog
      // tabs
      // widget
      // Minst två valfria effekter från JQuery UI 
    });

  });

});