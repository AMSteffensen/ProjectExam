const info = 'https://api.spacexdata.com/v3/info';
const content = document.getElementById('content');

function getData() {
  fetch(info)
    .then(result => result.json())
    .then((res) => {
      displayData();
    })
}

function displayHistory() {
  content.innerHTML = "";
  content.innerHTML = 'History';
}


function displayRockets() {
  content.innerHTML = "";
  content.innerHTML = 'Rockets'
}

function displayData() {
  /* 
        "name": "SpaceX",
    "founder": "Elon Musk",
    "founded": 2002,
    "employees": 7000,
    "vehicles": 3,
    "launch_sites": 3,
    "test_sites": 1,
    "ceo": "Elon Musk",
    "cto": "Elon Musk",
    "coo": "Gwynne Shotwell",
    "cto_propulsion": "Tom Mueller",
    "valuation": 27500000000,
    "headquarters": {
        "address": "Rocket Road",
        "city": "Hawthorne",
        "state": "California"
    },
    "links": {
        "website": "https://www.spacex.com/",
        "flickr": "https://www.flickr.com/photos/spacex/",
        "twitter": "https://twitter.com/SpaceX",
        "elon_twitter": "https://twitter.com/elonmusk"
    },
    "summary": "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.

        */
}


function addEventListnerer() {
var historyTrigger = document.getElementById("historyTrigger");
historyTrigger.addEventListener("click", displayHistory);

var rocketsTrigger = document.getElementById("rocketsTrigger");
rocketsTrigger.addEventListener("click", displayRockets);

}


// Make self invoking function for loading scripts
(function () {
  "use strict";
  getData();
  addEventListnerer();
})();