// sortable
$(function() {

    $.widget("custom.card", {
        // Default options.
        options: {
            title: ''
        },
        // skapar todo items
        _create: function() {
            var title = this.options.title;
            this.element
                .addClass("card")
                .addClass("white")
                .text(title)


            // skapar button open knappen för dialogen
            this.open = $("<button>", {
                text: "Details",
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
                text: "Status",
                "class": "done"
            })

            .appendTo(this.element)
                .button();

            this._on(this.changer, {
                // _on won't call random when widget is disabled
                click: "done"
            });

        },
        _destroy: function() {
            // remove generated elements
            this.changer.remove();

            this.element
                .removeClass("<li></li>")
                .removeClass("card")
                .removeClass('white')
                .enableSelection()
                .css("background-color", "transparent");
        },

        // create ends here

        done: function() {
            const color = [
                'red',
                'green',
            ]
            this.element.removeClass('white');
            this.element.addClass('red').toggleClass(color[1]);

        },

        openDialog: function() {
            $('#tabs-1').html('<p>' + this.options.description + '</p>')
            $('#tabs-2').html('<p>' + this.options.date + '</p>')
            $('#tabs-3').html('<p>' + this.options.title + '</p>')
            $("#tabs").show();
            $('#dialog').dialog();
            $("#dialog").effect("bounce", "slow");
            $("#dialog").dialog({
                buttons: [
                    // {
                    // text: 'Delete',
                    // icons: {
                    //     primary: "ui-icon-check"
                    // },
                    // click: function() {
                    //    $(clickedItemId).remove();
                    //    $(this).dialog('close');
                    // }},
                    {
                        text: 'OK',
                        icons: {
                            primary: "ui-icon-cancel"
                        },
                        click: function() {
                            //    title = $('#tabs-3').val();
                            //    desc = $('#tabs-1').val();
                            //    setNewValues();
                            $(this).dialog('close');
                        }
                    }
                ]
            });
        }
    });

    /*  COLORS */
    const color = [
        'red',
        'green',
        'blue',
        'cyan',
    ]
    const colorgenerator = () => {

        var liElement = $("<li></li>");
        $('span.red').on('click', () => {
            $(clickedItemId).removeClass(color).toggleClass(color[0]);
        })
        $('span.green').on('click', () => {
            $(clickedItemId).removeClass(color).toggleClass(color[1])
        })
        $('span.blue').on('click', () => {
            $(clickedItemId).removeClass(color).toggleClass(color[2])
        })
        $('span.cyan').on('click', () => {
            $(clickedItemId).removeClass(color).toggleClass(color[3])
        })

    };

    $(".sortable1, .sortable2, .sortable3").sortable({
        connectWith: "ul",
        dropOnEmpty: true
    }).disableSelection();

    $("#datepicker").datepicker();

    $("#submitBtn").click(function() {
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

    var htmlString = $(form).html();
    $('.output').text(htmlString);

});