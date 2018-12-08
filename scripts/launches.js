loadLastest();

function loadLastest() {
	fetch("https://api.spacexdata.com/v2/launches/latest")
		.then(function (result) {
			return result.json();
		})
		.then(function (res) {
			displayLatestLaunches(res);
		})
		.catch(function (err) {
			console.log(err);
		});
}

function loadUpcoming() {
	fetch("https://api.spacexdata.com/v3/launches/upcoming")
		.then(function (result) {
			return result.json();
		})
		.then(function (res) {
			displayUpcomingLaunches(res);
		})
		.catch(function (err) {
			console.log(err);
		});
}

function displayLatestLaunches(launch) {
	var output = '';
    output += 
        `<div class="card card--light">
        <figure><img src="${launch.links.mission_patch_small}" alt="${launch.mission_name} Mission Patch"></td>
        <h2>${launch.mission_name}</h2>
        <h3 class="card__title">${launch.rocket.rocket_name}</h3>
        <p class="card__text">${launch.details ? launch.details : 'No details available for this mission.'}</p>

        </div>
        `
        

	document.getElementById('latest-launch').innerHTML = output;
}
