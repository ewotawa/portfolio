
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


/* add app install banner */

/* https://developers.google.com/web/fundamentals/app-install-banners/ */

/* When the beforeinstallprompt event has fired, save a reference to the event, and update your user interface to indicate that the user can add your app to their home screen. */

let deferredPrompt;
var btnAdd = document.getElementById('btnAdd');

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  
  /* The best way to notify the user your app can be installed is by adding a button or other element to your user interface. Don't show a full page interstitial or other elements that may be annoying or distracting. */
  btnAdd.style.display = 'block';
    
});

/* Show the prompt */
btnAdd.addEventListener('click', (e) => {
  // hide our user interface that shows our A2HS button
  btnAdd.style.display = 'none';
  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
});

/* Determine if the app was successfully installed */
window.addEventListener('appinstalled', (evt) => {
  app.logEvent('a2hs', 'installed');
});








/* https://css-tricks.com/snippets/jquery/fit-iframe-to-content/ */

