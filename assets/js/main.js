/* smooth scroll */

document.addEventListener('click', function(event) {
    let targetId = event.target.id;
    console.log(targetId);
    targetId.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

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











/* https://css-tricks.com/snippets/jquery/fit-iframe-to-content/ */

/*
    $(function(){
    
        var iFrames = $('iframe');
      
    	function iResize() {
    	
    		for (var i = 0, j = iFrames.length; i < j; i++) {
    		  iFrames[i].style.height = iFrames[i].contentWindow.document.body.offsetHeight + 'px';}
    	    }
    	    
        	if ($.browser.safari || $.browser.opera) { 
        	
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
        
        });

*/