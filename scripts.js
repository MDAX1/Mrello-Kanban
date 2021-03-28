// Sortable (old)
// ----------------- old code starts here ---------------
//  $(function() {
//   $( ".sortable" ).sortable({
//     connectWith: ".connectedSortable",
//     receive: function( event, ui ) {
//       $(this).css({"background-color":"blue"});
//     }
//   }).disableSelection(); 
//   $('.add-button').click(function() {
//       var txtNewItem = $('#new_text').val();
//       $(this).closest('div.container').find('ul').append('<li class="card">'+txtNewItem+'</li>');
//   });    
// });
// ----------------- old code ends here ---------------

// Sortable (new code)
$(function () {
  $(".sortable1, .sortable2, .sortable3, .sortable4, .sortable5").sortable({
      connectWith: ".connectedSortable"}).disableSelection();

      // datepicker here

  // Submit task
  $("#submitBtn").click(function () {
      // $( "#tabs" ).tabs();
      var taskList = $("#text").val();
      // console.log("click", taskList);
      var dsc = $("#description").val();
      //append input to the list
      $(".sortable1").append(
        "<li class='card'>" + "Title:" + taskList + " " + "<br>" +
        "Description:" + dsc + "<span> </span>" + "</li>");
        // dialog here
    });

  // Input value 
  $(document).ready(function () {
      $("#submitBtn").click(function () {
          var x = $(".link-div").serializeArray();
          $.each(x, function (i, field) {
              $("#output").append(field.name + ":" + field.value + " ");
          });

          // tabs
          // widget
      });

  });

});
