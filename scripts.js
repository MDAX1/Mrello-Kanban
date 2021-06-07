// sortable
$(function () {

  $.widget("custom.card", {
      // Default options.
      options: {
          title: ''
      },
      // skapar todo items
      _create: function () {
          var title = this.options.title;
          this.element
              .addClass("card")
              .addClass("white")
              .text(title)

          // skapar button open knappen för dialogen
          this.open = $("<button>", {
                  text: "open info",
                  "class": "open-button"
              })

              .appendTo(this.element)
              .button();
          this._on(this.open, {
              // _on won't call random when widget is disabled
              click: "openDialog"
          });

          // button change card color
          this.changer = $("<button>", {
                  text: "change",
                  "class": "done"
              })

              .appendTo(this.element)
              .button();
          this._on(this.changer, {
              // _on won't call random when widget is disabled
              click: "done"
          });
      },
      done: function () {
          this.element.removeClass('white');
          this.element.addClass('green');
      },

      openDialog: function () {
          $('#tabs-1').html('<p>' + this.options.description + '</p>')
          $('#tabs-2').html('<p>' + this.options.date + '</p>')
          $('#tabs-3').html('<p>' + this.options.title + '</p>')
          $("#tabs").show();
          $('#dialog').dialog();
          $("#dialog").effect("bounce", "slow");
      }
  });

  $(".sortable1, .sortable2, .sortable3").sortable({
      connectWith: "ul",
      dropOnEmpty: true
  }).disableSelection();

  $("#datepicker").datepicker();

  $("#submitBtn").click(function () {
      var taskList = $("#text").val();
      var dsc = $("#description").val();
      var date = $("#datepicker").val();

      //append input to the list
      var liElement = $("<li></li>");
      liElement.card({
          title: taskList,
          description: dsc,
          date: date
      });

      liElement.toggle("fade", 1000);
      $(".sortable1").append(liElement);
  });

  $("#tabs").tabs();
  $("#tabs").hide();

});