# jQuery UI DatePicker with Custom Buttons

This repository demonstrates how to enhance a jQuery UI Datepicker by adding custom navigation buttons for improved user interaction. The custom buttons added include **"Today"**, **"Next"**, and **"Next Week" **to facilitate convenient date selection within the Datepicker interface.

### Getting Started
To use this implementation in your project, follow these steps:

Include jQuery and jQuery UI libraries in your HTML file:

`<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">`

`<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>`

`<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>`

Add an input field with a specific ID (e.g., datepicker) to attach the Datepicker:

`<input type="text" id="datepicker" class="input-class" />`

Initialize the Datepicker and configure it to show the button panel and set the desired date format:


```javascript
`$(function () {
    $("#datepicker").datepicker({
        showButtonPanel: true, // Display the button panel
        dateFormat: "yy-mm-dd", // Date format (e.g., YYYY-MM-DD)
        beforeShow: function (input) {
            generateButtons(input); // Call generateButtons function before showing the Datepicker
        },
        onChangeMonthYear: function (yy, mm, inst) {
            generateButtons(inst.input); // Call generateButtons function when month or year changes
        },
    });

    // Function to generate custom buttons within the Datepicker
    function generateButtons(input) {
        setTimeout(function () {
            var buttonPane = $(input).datepicker("widget").find(".ui-datepicker-buttonpane");

            // Create "Today" button
            var todayButton = $("<button>", {
                text: "Today",
                class: "ui-datepicker-clear ui-state-default ui-priority-primary ui-corner-all pull-left",
                click: function () {
                    $(input).datepicker("setDate", new Date()).datepicker("hide"); // Set date to today and hide the Datepicker
                }
            });

            // Create "Next Month" button
            var nextButton = $("<button>", {
                text: "Next",
                class: "ui-datepicker-clear ui-state-default ui-priority-primary ui-corner-all pull-left",
                click: function () {
                    var currentDate = $(input).datepicker('getDate');
                    currentDate.setMonth(currentDate.getMonth() + 1);
                    $(input).datepicker('setDate', currentDate).datepicker("hide"); // Increment date by one month and hide Datepicker
                }
            });

            // Create "Next Week" button
            var nextWeekButton = $("<button>", {
                text: "Next Week",
                class: "ui-datepicker-clear ui-state-default ui-priority-primary ui-corner-all pull-left",
                click: function () {
                    var currentDate = $(input).datepicker('getDate');
                    currentDate.setDate(currentDate.getDate() + 7);
                    $(input).datepicker('setDate', currentDate).datepicker("hide"); // Increment date by one week and hide Datepicker
                }
            });

            // Clear existing buttons and append the custom buttons to the button pane
            buttonPane.empty();
            buttonPane.append(todayButton);
            buttonPane.append(nextButton);
            buttonPane.append(nextWeekButton);
        }, 1); // Delay to ensure Datepicker is fully rendered before modifying buttons
    }
});`
```
Customize the CSS styles (**class**) of the buttons and adjust the functionality of each button (**click** event) as needed.

Features
- Adds "Today", "Next", and "Next Week" buttons to the jQuery UI Datepicker for enhanced date selection.

- Dynamically updates the button panel when the Datepicker is displayed or when the month/year changes.

- Provides convenient navigation options within the Datepicker interface.
