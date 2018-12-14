"use strict";

// Signup event listner
function addEventListener() {
    // on sumbit form run validateForm
    document.getElementById("signupBtn").addEventListener("click", signupValid);
}

//URLS
var lastestlaunch = "https://api.spacexdata.com/v3/launches/latest";
var nextlaunch = "https://api.spacexdata.com/v3/launches/next";

// fetch lastest launch
fetch(lastestlaunch).then(function (response) {
    return response.json();
}).then(function (data) {
    displaydata(data);
}).catch(function (err) {
    return console.log(err);
});

// display lastest launch data
function displaydata(data) {
    document.getElementById("flightnumber").innerHTML = '<p>Flight Number: </p>' + data.flight_number;
    document.getElementById("launchyear").innerHTML = '<p>Launch Year: </p>' + data.launch_year;
    document.getElementById("rocketname").innerHTML = '<p>Rocket Name: </p>' + data.rocket.rocket_name;

    // slice youtube link for embeded video
    var link = data.links.video_link;
    link = link.substr(32, 11);

    document.getElementById("contentdiv").innerHTML = "\n    <iframe width=\"300\" height=\"315\" src=\"https://www.youtube.com/embed/" + link + "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
}

//add button and event listner
var nextButton = document.getElementById("nextButton").addEventListener('click', nextButtonClick);

// when button is clicked, fetch and display new data
function nextButtonClick() {
    var header = document.getElementById("launch-header");
    // remove header
    header.removeChild(header.firstChild);
    // make new header
    header.appendChild(document.createTextNode('Next Launch'));
    // fetch lastest launch
    fetch(nextlaunch).then(function (response) {
        return response.json();
    }).then(function (data) {
        document.getElementById("flightnumber").innerHTML = '<p>Flight Number: </p>' + data.flight_number;
        document.getElementById("launchyear").innerHTML = '<p>Launch Year: </p>' + data.launch_year;
        document.getElementById("rocketname").innerHTML = '<p>Rocket Name: </p>' + data.rocket.rocket_name;
        document.getElementById("contentdiv").innerHTML = "\n        <a target=\"_blank\" style=\"color: #de3737\" href=\"" + data.links.reddit_campaign + "\">Read More on reddit.</a>\n        ";
    }).catch(function (err) {
        return console.log(err);
    });
}

//add button and event listner
var nextButton = document.getElementById('prevButton').addEventListener('click', prevButtonClick);

// when button is clicked, fetch and display new data
function prevButtonClick() {
    var header = document.getElementById('launch-header');
    // remove header
    header.removeChild(header.firstChild);
    // make new header
    header.appendChild(document.createTextNode('Previous Launch'));

    // fetch previous launch
    fetch('https://api.spacexdata.com/v3/launches/71') // make this dynamic
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        // display data
        document.getElementById("flightnumber").innerHTML = '<p>Flight Number: </p>' + data.flight_number;
        document.getElementById("launchyear").innerHTML = '<p>Launch Year: </p>' + data.launch_year;
        document.getElementById("rocketname").innerHTML = '<p>Rocket Name: </p>' + data.rocket.rocket_name;

        // slice youtube link for embeded video
        var link = data.links.video_link;
        link = link.substr(32, 11);

        document.getElementById("contentdiv").innerHTML = "\n    <iframe width=\"300\" height=\"315\" src=\"https://www.youtube.com/embed/" + link + "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
    }).catch(function (err) {
        return console.log(err);
    });
}

function signupValid() {
    // validate signup form (TODO: add JS validation)
    /*   var emailInput = document.getElementById('emailInput').value;
       if (!emailInput.checkValidity()) {
          document.getElementById("signupMsg").innerHTML = "Email not valid";
      } else {
          document.getElementById("signupMsg").innerHTML = "Sucess!";
      } */
}

(function (event) {
    addEventListener();
})();