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
