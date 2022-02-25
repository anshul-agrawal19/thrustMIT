/* Debugging function used to print highlightable DOM elements to the Chrome console.
 * May work on other browsers too.
 * Usage: $(...).log()
 */
$.fn.log = function () {
	console.log.apply(console, this)
	return this
}

/* onClick event handler for links pointing to the same page.
 * Called by #go-to-top (see below) and and by navbar/footer links (via 'onclick="scrollToTop(event);"' attribute).
 */
var scrollToTop = function (evt) {
	evt.preventDefault() // Prevent default anchor click behavior.

	$('html, body').animate({
		scrollTop: 0
	}, 'slow')

	return false
}

// Functions to run after the page has loaded.
$(document).ready(function () {
	// Scrolls to top of the window upon page load.
	$('html, body').scrollTop(0)
	$('html, body').scrollLeft(0)

	// Hide the Scroll to Top button initially.
	$('#scroll-to-top').hide()

	// Hide the Scroll to Top button if the window is at the top of the viewport.
	// TODO: Make the Navbar transparent at top of screen
	$(window).scroll(function () {
		if ($(window).scrollTop() == 0) {
			$('#scroll-to-top').hide('fast')
		} else {
			$('#scroll-to-top').show('fast')
		}
	})

	// Animated scrolling to the top of the page when the Scroll to Top button is clicked.
	$('#scroll-to-top').click(function (event) {
		scrollToTop(event)
	})
})
