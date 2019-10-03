$(document).ready(function () {

    $('#form1').validate({
        // rules
        rules: {
            field1: {
                required: true
            }
        }
    });

    $('#form2').validate({
        // rules
        rules: {
            field2: {
                required: true
            }
        }
    });

    $('#form3').validate({
        // rules,
        rules: {
            field3: {
                required: true
            }
        },
        submitHandler: function (form) {
            // serialize and join data for all forms
            // ajax submit
            alert('go ajax');
            return false;
        }
    });

    $('#gotoStep2').on('click', function () {
        if ($('#form1').valid()) {
            // code to reveal step 2
            $('#form1').hide();
            $('#form2').show();
        }
    });

    $('#gotoStep3').on('click', function () {
        if ($('#form2').valid()) {
            // code to reveal step 3
            $('#form2').hide();
            $('#form3').show();
        }
    });

    // there is no third click handler since the plugin takes care of this with the
    // built-in submitHandler callback function on the last form.

});