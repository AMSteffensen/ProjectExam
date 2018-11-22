
const launchData = 'https://api.spacexdata.com/v2/launches/latest'

    fetch(launchData)
        .then(res => res.json())
        .then(data => console.log(data));
