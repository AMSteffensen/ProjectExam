loadLastest();

function loadLastest() {
	fetch("https://api.spacexdata.com/v3/launches/latest")
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

	var data = '';
	data += 
	`
	<ul class="list-group">
		<li class="list-group-item"><a target="_blank" href="${launch.links.wikipedia}">Wikipedia</a></li>
		<li class="list-group-item"><a target="_blank" href="${launch.links.video_link}">YouTube</a></li>
	</ul>
	`
	document.getElementById('data').innerHTML = data;
	data.style.color = "blue";
}


