//URLS
const launches = 'https://api.spacexdata.com/v3/launches'; // returns all launches
const pastlaunches = 'https://api.spacexdata.com/v3/launches/past' // returns past launches
const upcomminglaunches = 'https://api.spacexdata.com/v3/launches/upcoming' // returns upcomming launches
const lastestlaunch = 'https://api.spacexdata.com/v3/launches/latest'; // returns the lastest launch
const nextlaunch = 'https://api.spacexdata.com/v3/launches/next'; // returns the next launch

// fetch lastest launch
fetch(lastestlaunch)
    .then(response => response.json())
    .then(data => {
        displaydata(data);
    })
    .catch(err => console.log(err));

// display lastest launch data
function displaydata(data) {
    document.getElementById("flightnumber").innerHTML = '<p>Flight Number: </p>' + data.flight_number;
    document.getElementById("launchyear").innerHTML = '<p>Launch Year: </p>' + data.launch_year;
    document.getElementById("rocketname").innerHTML = '<p>Rocket Name: </p>' + data.rocket.rocket_name;

    // slice youtube link for embeded video
    var link = data.links.video_link;
    var link = link.substr(32, 11);
    console.log(link);

    document.getElementById("contentdiv").innerHTML = `
    <iframe width="300" height="315" src="https://www.youtube.com/embed/${link}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}



//add button and event listner
var nextButton = document.getElementById('nextButton').addEventListener('click', nextButtonClick);

// when button is clicked, fetch and display new data
function nextButtonClick() {
    var header = document.getElementById('launch-header');
    // remove header
    header.removeChild(header.firstChild);
    // make new header
    header.appendChild(document.createTextNode('Next Launch'));
    // fetch lastest launch
    fetch(nextlaunch)
        .then(response => response.json())
        .then(data => {
            document.getElementById("flightnumber").innerHTML = '<p>Flight Number: </p>' + data.flight_number;
            document.getElementById("launchyear").innerHTML = '<p>Launch Year: </p>' + data.launch_year;
            document.getElementById("rocketname").innerHTML = '<p>Rocket Name: </p>' + data.rocket.rocket_name;

            document.getElementById("contentdiv").innerHTML = `
        <a target="_blank" style="color: #de3737" href="${data.links.reddit_campaign}">Read More on reddit.</a>
        `;
        })
        .catch(err => console.log(err));
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
        .then(response => response.json())
        .then(data => {
            // display data
            document.getElementById("flightnumber").innerHTML = '<p>Flight Number: </p>' + data.flight_number;
            document.getElementById("launchyear").innerHTML = '<p>Launch Year: </p>' + data.launch_year;
            document.getElementById("rocketname").innerHTML = '<p>Rocket Name: </p>' + data.rocket.rocket_name;


            // slice youtube link for embeded video
            var link = data.links.video_link;
            var link = link.substr(32, 11);
            console.log(link);

            document.getElementById("contentdiv").innerHTML = `
    <iframe width="300" height="315" src="https://www.youtube.com/embed/${link}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        })
        .catch(err => console.log(err));

}