const info = 'https://api.spacexdata.com/v3/info';

function getData() {
    fetch(info)
      .then(result => result.json())
      .then((res) => {
        
      })

  }
  
  function toggleDisplay() {
    // get panel element
    var panel = document.getElementById("moreInfoContent");
  
    // check if panel is expanded
    if (panel.style.display === "block") {
      // collapse panel
      panel.style.display = "none";
    } else {
      // expand panel
      panel.style.display = "block";
    }
  }
  
  // add event listener for panel dispaly
  function addEventListener() {
    var moreInfoTrigger = document.getElementById("moreInfoTrigger");
    moreInfoTrigger.addEventListener("click", toggleDisplay);
  }
  
  // Make self invoking function for loading scripts
  (function() {
    "use strict";
    replaceText();
    addEventListener();
  })();
  
  
  