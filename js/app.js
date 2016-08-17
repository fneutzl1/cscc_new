$(document).foundation()



// Create the measurement node
var scrollDiv = document.createElement("div");
scrollDiv.className = "scrollbar-measure";
document.body.appendChild(scrollDiv);

// Get the scrollbar width
var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
console.warn(scrollbarWidth); // Mac:  15

if ($(document).height() <= $(window).height()) {
    scrollbarWidth = 0;
}

// Delete the DIV 
document.body.removeChild(scrollDiv);




  // Foundation Default Keyboard controls
  Foundation.Keyboard.register('DropdownMenu',{
    'ENTER': 'open',
    'SPACE': 'open',
    'ARROW_RIGHT': 'next',
    'ARROW_UP': 'up',
    'ARROW_DOWN': 'down',
    'ARROW_LEFT': 'previous',
    'ESCAPE': 'close'
  });



// Reposition Navigation Elements
if ($(window).innerWidth() <= 639 - scrollbarWidth) {
	$('#mainNav').detach().insertAfter('#resDrop');
	$('#exServices').detach().insertAfter('#mainNav');
}

if ($(window).innerWidth() > 639 - scrollbarWidth) {
    $('#searchButton').detach().insertAfter('#searchInsert');
}


$( window ).resize(function() {

    if ($(window).innerWidth() > 639 - scrollbarWidth) {
	    $('#resDrop').detach().insertAfter('#exServices');
	    $('#mainNav').detach().insertAfter('#searchControl');
        $('#searchButton').detach().insertAfter('#searchInsert');
	}
	if ($(window).innerWidth() <= 639 - scrollbarWidth) {
	    $('#exServices').detach().insertAfter('#resDrop');
	    $('#mainNav').detach().insertAfter('#resDrop');
        $('#searchButton').detach().insertBefore('#togBtn');
	}
});



// GOOGLE SEARCH CODE
// TODO Cleanup & remove ADS
(function() {
    var cx = '016557844258860834786:llfwsv49s2a';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();

window.onload = function(){
document.getElementById('gsc-i-id1').placeholder = 'Search...';};


// Target Search Bar on Search Button Press
$('#searchBtn').click(function() {
    $("input#gsc-i-id1.gsc-input").focus()
    console.log("hello");
});