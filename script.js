$(function () {
    $("#datepicker").datepicker({
        showButtonPanel: true,
        dateFormat: "yy-mm-dd",
        beforeShow: function (input) {
            generateButton(input);
        },
        onChangeMonthYear: function (yy, mm, inst) {
            generateButton(inst.input);
        },
        onUpdateDatepicker: function (ins) {
            generateButton(inst.input);
        }

    });

    function generateButton(input) {
        setTimeout(function () {
            var buttonPane = $(input).datepicker("widget").find(".ui-datepicker-buttonpane");

            var todayButton = $("<button>", {
                text: "Today",
                class: "ui-datepicker-clear ui-state-default ui-priority-primary ui-corner-all pull-left",
                click: function () {
                    $(input).datepicker("setDate", new Date()).datepicker("hide");

                }
            });

            var NextButton = $("<button>", {
                text: "Next",
                class: "ui-datepicker-clear ui-state-default ui-priority-primary ui-corner-all pull-left",
                click: function () {
                    var currentDate = $(input).datepicker('getDate');
                    currentDate.setMonth(currentDate.getMonth() + 1);
                    $(input).datepicker('setDate', currentDate).datepicker("hide");

                }
            });

            var nextWeekButton = $("<button>", {
                text: "Next Week",
                class: "ui-datepicker-clear ui-state-default ui-priority-primary ui-corner-all pull-left",
                click: function () {
                    var currentDate = $(input).datepicker('getDate');
                    currentDate.setDate(currentDate.getDate() + 7);
                    $(input).datepicker('setDate', currentDate).datepicker("hide");


                }
            });
            buttonPane.empty();
            buttonPane.append(todayButton);
            buttonPane.append(NextButton);
            buttonPane.append(nextWeekButton);
        }, 1);
    }
    $.datepicker._gotoToday = function (id) {
        $(id).datepicker('setDate', new Date()).datepicker('hide').blur();
    };


});