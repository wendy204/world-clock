function updateTime() {
  // Cape Town
  let capeTownElement = document.getElementById("cape-town");
  if (capeTownElement) {
    let capeTownDateElement = capeTownElement.querySelector(".date");
    let capeTownTimeElement = capeTownElement.querySelector(".time");
    let capeTownTime = moment().tz("Africa/Cape_Town");

    capeTownDateElement.innerHTML = capeTownTime.format("D, MMMM , YYYY");
    capeTownTimeElement.innerHTML = capeTownTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Mexico City
  let mexicoCityElement = document.getElementById("mexico-city");
  if (mexicoCityElement) {
    let mexicoCityDateElement = mexicoCityElement.querySelector(".date");
    let mexicoCityTimeElement = mexicoCityElement.querySelector(".time");
    let mexicoCityTime = moment().tz("America/Mexico_City");

    mexicoCityDateElement.innerHTML = mexicoCityTime.format("D, MMMM , YYYY");
    mexicoCityTimeElement.innerHTML = mexicoCityTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Sydney
  let sydneyElement = document.getElementById("sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("D, MMMM , YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Tokyo
  let tokyoElement = document.getElementById("tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("D, MMMM , YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.getElementById("cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("D, MMMM , YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div> <a href="index.html">All cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.getElementById("city-name");
citiesSelectElement.addEventListener("change", updateCity);