$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: $(this).serialize(),
            success: function(response) {
                $('#result').html(response);
                $('#registrationForm')[0].reset(); // Reset the form
            },
            error: function() {
                $('#result').html('<p style="color: red;">There was an error processing your request. Please try again.</p>');
            }
        });
    });
});