//code for pixel art maker
$(document).ready(function() {
    //grid will appear only when submit button is clicked
    $('#sizePicker').on("submit", function makeGrid(x) {
        //to remove color if filled in the grid
        $('table tr').remove();
        //storing input entered by the user
        var rows = $('#inputHeight').val();
        var cols = $('#inputWeight').val();
        // loop for rows 
        for (var i = 1; i <= rows; i++) {
            //creating rows with <tr> tag
            $('table').append('<tr></tr>');
            //loop for columns
            for (var j = 1; j <= cols; j++) {
                //creating columns in each row
                $('tr:last').append('<td></td>');
                //creating class bg for each block of grid
                $('td').attr("class", 'bg');
            }
        }
        //to stop default action
        x.preventDefault();
        //code to apply choosed color on each block by clicking on it
        $('.bg').click(function(event) {
            //storing input color value by user
            var color = $('#colorPicker').val();
            $(event.target).css('background-color', color);
        });
    });
});