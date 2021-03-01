/* render elements to the DOM from JSON files */

/* PORTFOLIO */

/* load JSON data into a variable */
const portfolioStr = JSON.stringify(portfolio);
const portfolioParsed = JSON.parse(portfolioStr);

console.log(portfolioParsed[0].title);
console.log(portfolioParsed[0].path);

/* smooth scroll */

$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 700);
});

/* call resizeIframes function */

resizeIframes();

/* https://css-tricks.com/snippets/jquery/fit-iframe-to-content/ */

    function resizeIframes() {

        var iFrames = document.getElementsByTagName('iframe');

    	function iResize() {

    		for (var i = 0, j = iFrames.length; i < j; i++) {
    		  iFrames[i].style.height = iFrames[i].contentWindow.document.body.offsetHeight + 'px';}
    	    }

        	// handler for safari and opera browsers

        	let sUsrAg = window.navigator.userAgent;

        	if (sUsrAg.indexOf("Safari") > -1 || sUsrAg.indexOf("Opera") > -1) {

        	   iFrames.load(function() {
        	       setTimeout(iResize, 0);
               });

        	   for (var i = 0, j = iFrames.length; i < j; i++) {
        			var iSource = iFrames[i].src;
        			iFrames[i].src = '';
        			iFrames[i].src = iSource;
               }

        	} else {
        	   iFrames.load(function() {
        	       this.style.height = this.contentWindow.document.body.offsetHeight + 'px';
        	   });
        	}

        }
