/* render elements to the DOM from JSON files */

/* PORTFOLIO */

/* load JSON data into a variable */
const portfolioStr = JSON.stringify(portfolio);
const portfolioParsed = JSON.parse(portfolioStr);

function addProject(portfolioParsed) {
  for (project in portfolioParsed) {
    let id = portfolioParsed[project].id;
    let title = portfolioParsed[project].title;
    let path = portfolioParsed[project].path;
    let languages = portfolioParsed[project].languages;
    let freecodecamp = portfolioParsed[project].freecodecamp;
    let description = portfolioParsed[project].description;
    let buttons = portfolioParsed[project].buttons;

    /*
    console.log(title);
    console.log(path);
    console.log(languages);
    console.log(freecodecamp);
    console.log(description);
    console.log(buttons);
    */

    /* create a new list item element to hold the project card */
    let li = document.createElement('li');
    li.setAttribute('class', 'project-tile');

    /* add a section for the thumbnail of the site */
    let sectionThumb = document.createElement('section');

    let divTC = document.createElement('div');
    divTC.setAttribute('class', 'thumbnail-container');

    let divT = document.createElement('div');
    divT.setAttribute('class', 'thumbnail');

    let iframe = document.createElement('iframe');
    iframe.setAttribute('src', path);
    iframe.setAttribute('onload', 'this.style.opacity = 1');
    iframe.setAttribute('frameborder', '0');

    divT.appendChild(iframe);
    divTC.appendChild(divT);
    sectionThumb.appendChild(divTC);
    li.appendChild(sectionThumb);

    /* add section for caption */
    let sectionCaption = document.createElement('section');
    sectionCaption.setAttribute('class', 'caption');

    let header = document.createElement('h2');
    header.setAttribute('class', 'title');
    let headerText = document.createTextNode(title);
    header.appendChild(headerText);

    /* add icons for languages used */
    let artLang = document.createElement('article');
    artLang.setAttribute('class', 'languages flex-box');
    for (lang in languages) {
      let h2Lang = document.createElement('h2');
      h2Lang.setAttribute('class', languages[lang]);
      artLang.appendChild(h2Lang);
    }

    /* add the freeCodeCamp element if appropriate and the description */
    let artDesc = document.createElement('article');
    artDesc.setAttribute('class', 'description');
    if (freecodecamp) {
      let h4 = document.createElement('h4');
      h4.setAttribute('class', freecodecamp.icon);
      let h4Text = document.createTextNode(' ' + freecodecamp.assignment);
      h4.appendChild(h4Text);
      artDesc.appendChild(h4);
    }
    let p = document.createElement('p');
    let pText = document.createTextNode(description);
    p.appendChild(pText);
    artDesc.appendChild(p);

    /* create link buttons */
    let artButton = document.createElement('article');
    artButton.setAttribute('id', 'links');
    artButton.setAttribute('class', 'flex-box');
    for (button in buttons) {
      let bp = document.createElement('p');
      bp.setAttribute('class', 'flex-item');
      bp.setAttribute('onclick', 'window.open(' + buttons[button].link + ')');
      let i = document.createElement('i');
      i.setAttribute('class', buttons[button].icon);
      bp.appendChild(i);
      let bpText = document.createTextNode(' ' + buttons[button].text);
      bp.appendChild(bpText);
      artButton.appendChild(bp);
    }

    sectionCaption.appendChild(header);
    sectionCaption.appendChild(artLang);
    sectionCaption.appendChild(artDesc);
    sectionCaption.appendChild(artButton);
    li.appendChild(sectionCaption);




    /* add to the DOM */
    let container = document.getElementById(id);
    container.appendChild(li);

  }
}

document.body.onload = addProject(portfolioParsed);










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
