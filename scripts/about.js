var info = 'https://api.spacexdata.com/v3/info';

// fetch data
function getData() {
  fetch(info).then(function (result) {
    return result.json();
  }).then(function (res) {
    displayData(res);
  }).catch(function (err) {
    return console.log(err);
  });
}

function displayData(result) {
  var details = document.getElementById('content');
  details.innerHTML += "<span class='list-group-item'><strong>Name:</strong> " + result.name + "</span>"+"<br />";
  details.innerHTML += "<span class='list-group-item'><strong>Founder:</strong>   " + result.founder + "</span>"+"<br />";
  details.innerHTML += "<span class='list-group-item'><strong>Founded:</strong> " + result.founded + "</span>"+"<br />";
  details.innerHTML += "<span class='list-group-item'><strong>Employees:</strong>" + result.employees + "</span>"+"<br />";
  details.innerHTML += "<span class='list-group-item'><strong>Vehicles:</strong>   " + result.vehicles + "</span>"+"<br />";
  details.innerHTML += "<span class='list-group-item'><strong>Launch Sites:   </strong>" + result.launch_sites + "</span>"+"<br />";
  details.innerHTML += "<span class='list-group-item'><strong>Test Sites:  </strong> " + result.test_sites + "</span>"+"<br />";
  details.innerHTML += "<span class='list-group-item'><strong>CEO: </strong>  " + result.ceo + "</span>"+"<br />";
  details.innerHTML += "<span class='list-group-item'><strong>COO:  </strong> " + result.coo + "</span>"+"<br />";
  details.innerHTML += "<span class='list-group-item'><strong>CTO Propulsion:  </strong> " + result.cto_propulsion + "</span>"+"<br />";
  details.innerHTML += "<span class='list-group-item'><strong>Valuation: </strong>  " + result.valuation + "</span>"+"<br />";
}

function displayHistory() {
  content.innerHTML = "";
  content.innerHTML = 'History';
}

function displayRockets() {
  content.innerHTML = "";
  content.innerHTML = 'Rockets';
}


function addEventListnerer() {
  var historyTrigger = document.getElementById("historyTrigger");
  historyTrigger.addEventListener("click", displayHistory);

  var rocketsTrigger = document.getElementById("rocketsTrigger");
  rocketsTrigger.addEventListener("click", displayRockets);
}

// Make self invoking function for loading scripts
(function () {
  getData();
  addEventListnerer();
})();