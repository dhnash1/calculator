console.log("JS");

$(document).ready(function() {
    console.log("JQ");
    $('#clear').on('click', function(){

      $('#answer').html('');

    });
    
    $('#go').on('click', function() {
        var first = $('#first').val();
        var second = $('#second').val();
        var opp = $(operation).val();

        console.log(first, second);
        $.ajax({
            type: 'POST',
            url: '/math',
            data: {
                one: first,
                two: second,
                math: opp
            },
            success: function(response) {
                console.log("ishygddt", response);
                $('#answer').html(response.gift);
            }
        });
    });
});
