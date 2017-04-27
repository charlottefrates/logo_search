$(document).ready(function () {
    $('.btn').click(function () {
        // get programType from the user
        var programType = $('[name="program-type"]').val();
        // get educationLevel from the user
        var educationLevel = $('[name="edu-level"]').val();

        //if the user selects no program use and empty string
        var programTypeSelector = '';
        if (programType != '') {
            programTypeSelector = "." + programType;
        }

        //if the user selects no education level use and empty string
        var educationLevelSelector = '';
        if (educationLevel != '') {
            educationLevelSelector = "." + educationLevel;
        }

        //when both selectors are selected the active class is added
        var combinedSelector = programTypeSelector + educationLevelSelector;
        //if the combinedSelector is empty add the active class to all the images
        if (combinedSelector === "") {
            $('.images img').addClass('active');
        }
        //if the combinedSelector is not empty add the active class only to the selected images
        else {
            $('.images img').removeClass('active');
            $(combinedSelector).addClass('active');
        }
    });
});
