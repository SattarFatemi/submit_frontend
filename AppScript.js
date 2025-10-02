//menu dropdown
let menuToggleCouter = 1;
$(document).ready(function() {
	$('#menu-items').fadeOut(0);
});
$(document).ready(function() {
	$('#menu-icon').click(function() {
        if(menuToggleCouter%2) {
            $('#menu-items').fadeIn(0);
        }
        else {
            $('#menu-items').fadeOut(300);
        }
        menuToggleCouter++;
	});
});

//user dropdown
let userToggleCouter = 1;
$(document).ready(function() {
	$('#user-items').fadeOut(0);
});
$(document).ready(function() {
	$('#user-icon').click(function() {
        if(userToggleCouter%2) {
            $('#user-items').fadeIn(0);
        }
        else {
            $('#user-items').fadeOut(300);
        }
        userToggleCouter++;
	});
});