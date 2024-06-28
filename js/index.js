var tempContainer = [];
var city;
var searchInput = document.querySelector('.search');
var findBtn = document.querySelector('.find')
var current;
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var menuBtn = document.querySelector('.menubutton');
var tabsBar = document.querySelector('.tabs')

async function gettemp(country) {
  var data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=53ab3cd45f78430299580008242506&q=${country}&days=3`);
  var response = await data.json();
  var forecast = response.forecast;
  current = response.current
  tempContainer = forecast.forecastday
  var location = response.location;
  city = location.name;
  displaytemp();
  console.log(response)
}

gettemp('port said');



function displaytemp() {
  var cartona;
  cartona = ` <div class="weathercontainer d-lg-flex ">
              <div class="firstday pb-2 col-lg-4">
                <div class="title d-flex py-2 justify-content-between">
                  <h2 class="mx-3 mb-0">${weekday[d.getDay()]}</h2>
                  <h2 class="mx-3 mb-0">${d.getDate()} ${month[d.getMonth()]}</h2>
                </div>
                <div class="container">
                  <h3 class="my-4">${city}</h3>
                  <div class="degree d-flex align-items-center">
                    <h4 class='mb-0'>${current.temp_c}&deg;c</h4>
                    <div class="weathercondition ms-4">
                      <img src="https:${current.condition.icon}" class="w-75" alt="weather-condition">
                    </div>
                  </div>
                  <h5 class="my-3">${current.condition.text}</h5>
                  <ul class="d-flex list-unstyled my-4">
                    <li class="me-4"><img src="images/icon-umberella@2x.png" alt="rain-probability">20%</li>
                    <li class="me-4"><img src="images/icon-wind@2x.png" alt="rain-probability">18 KM/H</li>
                    <li class="me-4"><img src="images/icon-compass@2x.png" alt="rain-probability">East</li>
                  </ul>
                </div>
              </div>
              <div class="secondday day2 pb-2 col-lg-4 text-center">
                <div class="title title2 text-center py-2">
                  <h2 class="mx-3 mb-0">${weekday[d.getDay() + 1]}</h2>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center h-100 ">
                  <div class="text-center w-25 mx-auto">
                    <img src="https:${tempContainer[1].day.condition.icon}" class="w-100" alt="weather-condition">
                  </div>
                  <h4>${tempContainer[1].day.maxtemp_c}&deg;c</h4>
                  <h5>${tempContainer[1].day.mintemp_c}&deg;c</h5>
                    <h6 class="my-3">${tempContainer[1].day.condition.text}
                  </h6>
                </div>
              </div>
              <div class="secondday day3 pb-2 col-lg-4 text-center">
                <div class="title text-center py-2 ">
                  <h2 class="mx-3 mb-0">${weekday[d.getDay() + 2]}</h2>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center h-100 ">
                  <div class="text-center w-25 mx-auto">
                    <img src="https:${tempContainer[2].day.condition.icon}" class="w-100" alt="weather-condition">
                  </div>
                  <h4>${tempContainer[2].day.maxtemp_c}&deg;c</h4>
                  <h5>${tempContainer[2].day.mintemp_c}&deg;c</h5>
                    <h6 class="my-3">${tempContainer[2].day.condition.text}
                  </h6>
                </div>
              </div>
            </div>`

  document.querySelector('.weather1').innerHTML = cartona;
}

searchInput.addEventListener('input', function () {
  gettemp(searchInput.value);
})


findBtn.addEventListener('click', function () {
  gettemp(searchInput.value);
})


menuBtn.addEventListener('click', function () {
  tabsBar.classList.toggle('d-none')
  if (tabsBar.style.maxHeight > 0) {
    tabsBar.style.maxHeight = 0 + 'px'
  }
  else {
    tabsBar.style.maxHeight = tabsBar.scrollHeight + 'px'
    console.log('hello');
  }
})

