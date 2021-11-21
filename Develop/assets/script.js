//version 1
$(document).ready(function() {

        //display todays date as a heading, in todaysDate Id

        var rightNow = new Date();

        console.log(rightNow);

        options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

        console.log(rightNow.toLocaleDateString("en-US", options));


        var rightNowText = JSON.stringify(rightNow.toLocaleDateString("en-US", options))

        console.log($("#currentDay"));


        var currentDayID = $("#currentDay");

        currentDayID.text(rightNowText.split('"')[1]);
        // add array

        hours = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm']

        hours24hour = ['9', '10', '11', '12', '13', '14', '15', '16', '17']

        var textareaLoad = "";

        var clickedHour = "";
        var storedVar = '';

        var arrayClickHours = [];

        var createRowsWithTimes = function createRows() {
            // replace rightNowHours with ParseInt(rightNow.getHours)
            var rightNowHours = parseInt(rightNow.getHours());



            // row status present past and future should be passed in
            for (i = 0; i < hours.length; i++) {

                var convertedArrayOfHours = parseInt(hours24hour[i]);
                //past rows should be compared with right now and current row hour if the row hour is less than current hour it should be class past
                //if clicked hour item === hours array append textarea value
                // if (a == hours[i]) {
                //     alert(localStorage.getItem('clickedHourItem') + "-" + hours[i]);
                // }

                if (hours24hour[i] < rightNowHours) {


                    $('.container').append($('<div class="row past time-block" id="' + hours[i] + '"><div class="hour col-1">' + hours[i] +
                        '</div><textarea class="col-10"></textarea><div data-hour="' + hours[i] + '" class = "saveBtn col-1"><i class = "far fa-save display-4"></i></div></div>'));

                }
                if (convertedArrayOfHours === rightNowHours) {
                    $('.container').append($('<div class="row present time-block" id="' + hours[i] + '"><div class="hour col-1">' + hours[i] +
                        '</div><textarea class="col-10"></textarea><div data-hour="' + hours[i] + '" class = "saveBtn col-1"><i class = "far fa-save display-4"></i></div></div>'));

                }
                if (hours24hour[i] > rightNowHours) {
                    $('.container').append($('<div class="row future time-block" id="' + hours[i] + '"><div class="hour col-1">' + hours[i] +
                        '</div><textarea class="col-10"></textarea><div data-hour="' + hours[i] + '" class = "saveBtn col-1"><i class="far fa-save display-4"></i></div></div>'));

                }
                // counterHolder = localStorage.getItem('counter');
                // for (i = 0; i <= hours24hour.length; i++) {
                storedCounter = localStorage.getItem('counter');


                storedVar = localStorage.getItem('clickedHourItems');
                // for (i = 0;)

                taskValueGet = localStorage.getItem('taskValue');
                $('#' + storedVar).children('textarea').val(taskValueGet);
                // for (i = 0; i <= hours.length; i++) {
                //     if (storedVar) {

                //     }

                // }
                // } //present rows should be compared with right now and current row hour if the row hour is equal to the current hour it should be class present
                //future rows should be compared with right now and current row hour if the row hour is greater than the current hour it should be class future

            }
        }

        // $('.row').on('blur', "textarea", function(event) {
        //     taskName = $(this).val();
        //     alert(taskName);
        // })
        createRowsWithTimes();

        $('.row').on("click", ".saveBtn", function(event) {
            clickedHour = $(this).parent().attr("id");

            var taskValue = $(this).parent('.row').children('textarea').val();
            console.log(taskValue)
                // var taskValue = $(this).parentElement.children[1].val();

            arrayClickHours.push(clickedHour);


            localStorage.setItem('clickedHourItems', clickedHour);
            localStorage.setItem('taskValue', taskValue);
            storedVar = localStorage.getItem('clickedHourItems');
            taskValueGet = localStorage.getItem('taskValue');
            hastagId = "#";

            concatedStoredVar = hastagId.concat(storedVar);
            $(concatedStoredVar).children('textarea').val(taskValueGet);

            // }

        })


    })
    //then display a hourly schedule with hour and task and save button as list


//in the task there will be an input text box

//if current time is past the hour on the schedule it will be grey

//red is current time hour

//green is future


//use localstorage to store the tasks get and setItem


//add a flipclock to countdown each hour