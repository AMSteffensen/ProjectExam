//URLS 
const capsules = 'https://api.spacexdata.com/v3/capsules';
const cores = 'https://api.spacexdata.com/v3/cores';
const dragons = 'https://api.spacexdata.com/v3/dragons';
const history = 'https://api.spacexdata.com/v3/history';
const info = 'https://api.spacexdata.com/v3/info'; // returns company info about spacex
const rockets = 'https://api.spacexdata.com/v3/rockets';
const launchpads = 'https://api.spacexdata.com/v3/launchpads'; // returns launchpad info
const latest = 'https://api.spacexdata.com/v3/launches/latest';
const payloads = 'https://api.spacexdata.com/v3/payloads';
const landingpads = 'https://api.spacexdata.com/v3/landpads'; //returns all landing pads
const launches = 'https://api.spacexdata.com/v3/launches'; // returns all launches
const pastlaunches = 'https://api.spacexdata.com/v3/launches/past' // returns past launches
const upcomminglaunches = 'https://api.spacexdata.com/v3/launches/upcoming' // returns upcomming launches
const lastestlaunch = 'https://api.spacexdata.com/v3/launches/latest'; // returns the lastest launch
const nextlaunch = 'https://api.spacexdata.com/v3/launches/next'; // returns the next launch
const missions = 'https://api.spacexdata.com/v3/missions'; // returns al missions
const roadster = 'https://api.spacexdata.com/v3/roadster'; // get current roadster orbit data
const ships = 'https://api.spacexdata.com/v3/ships'; // get ships that is supporting spacex

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

// Create a function, that takes the JSON Object as an argument.
function createInfo(result, date) {
    console.log(result);
    console.log(date);
    var htmlOutput = document.getElementById('launches');
    // all launches array
    var launchYear = [];
    var allLaunches = result.launch_year;
}

function getCapsules() {
    var data = document.getElementById('capsules');
    fetch
}

// when cta button clicked, call search function
function addEventListener() {
    document.getElementById('getLaunches').addEventListener('click', doSearch);
}

// when cta button clicked, load search result
function doSearch(event) {
    event.preventDefault();
    // take users input date
    //var date = document.getElementById('launch-date').value;
    // call load data passing user date input
    loadInfo(date);
}

// Make self invoking function for loading scripts
(function () {
    loadInfo();
    addEventListener();
})();




