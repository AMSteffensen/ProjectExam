//URLS
const launches = 'https://api.spacexdata.com/v3/launches'; // returns all launches
const pastlaunches = 'https://api.spacexdata.com/v3/launches/past' // returns past launches
const upcomminglaunches = 'https://api.spacexdata.com/v3/launches/upcoming' // returns upcomming launches
const lastestlaunch = 'https://api.spacexdata.com/v3/launches/latest'; // returns the lastest launch
const nextlaunch = 'https://api.spacexdata.com/v3/launches/next'; // returns the next launch

// get launches from spacex
function loadInfo() {
    fetch(launches)
        // Convert the results to JSON format
        .then(result => result.json())
        .then((result) => {
            createInfo(result, date);
        })
        .catch(err => console.log(err))
}


//EVENT
var prevButton = document.getElementById('prevButton').addEventListener('click', prevButtonClick);

function prevButtonClick(e) {
    fetch('https://api.spacexdata.com/v3/launches/past')
        // Convert the results to JSON format
        .then(result => result.json())
        .then((result) => {
            console.log(result.rocket_name);
            var output = '';
            output +=
                `<div class="card card--light">
        <p>${result.flight_number}"</p>
        <h2>${result.launch_year}</h2>
        `
            document.getElementById('previous-data').innerHTML = output;
        })
        .catch(err => console.log(err));
}


//add button and event listner
var nextButton = document.getElementById('nextButton').addEventListener('click', nextButtonClick);

// when button is clicked, display data
function nextButtonClick(data) {
    
    /*   document.getElementById("flightnumber").innerHTML = data.flight_number; */
    // fetch lastest launch
    fetch(nextlaunch)
        .then(response => response.json())
        .then(data => {

    console.log(data.launch_year);
            document.getElementById("flightnumber").innerHTML = '<p>Flight Number: </p>' + data.flight_number;
            document.getElementById("launchyear").innerHTML = '<p>Launch Year: </p>' + data.launch_year;
        })
        .catch(err => console.log(err));
}
// get data from spacex

// get buttons

// when prev button is clicked, show lastest launch