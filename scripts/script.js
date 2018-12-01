const launchData = 'https://api.spacexdata.com/v2/launches/latest'

fetch(launchData)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error(error))










// Datepicker

var dateControl = document.querySelector('input[type="date"]');
dateControl.value = '2017-06-01';


// Map

var headquarters = L.map('map').setView([51.505, -0.09], 13);