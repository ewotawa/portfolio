
/* call resizeIframes function */

resizeIframes();

/* https://css-tricks.com/snippets/jquery/fit-iframe-to-content/ */
/* update to deprecate jquery */

    function resizeIframes() {
    
        var iFrames = document.getElementsByTagName('iframe');

    	function iResize() {
    	
    		for (var i = 0, j = iFrames.length; i < j; i++) {
    		  iFrames[i].style.height = iFrames[i].contentWindow.document.body.offsetHeight + 'px';}
    	    }
    	    
        	// handler for safari and opera browsers
        	
        	let sUsrAg = window.navigator.userAgent;
        	
        	if (sUsrAg.indexOf("Safari") > -1 || sUsrAg.indexOf("Opera") > -1) { 
        	
        	   iFrames.load(function(){
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



/* add to home screen */

/* handle the install */

// declare a deferredPrompt variable
let deferredPrompt;
// get a reference to install button
const addBtn = document.querySelector('.add-button');
// set initial display of button to none: PWA will not be available for install until it follows the A2HS criteria
addBtn.style.display = 'none';

// Use a handler to handle the installation
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.PreventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    // Update UI to let the user know they can add to home screen
    addBtn.style.display = 'block';
    
    // set a click handler for the button
    addBtn.addEventListener('click', (e) => {
        // hide user interface that shows A2HS button
        addBtn.style.display = 'none';
        // show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
    });
});