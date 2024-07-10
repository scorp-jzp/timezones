function updateTime() {
    // New York
    let newYorkElement = document.querySelector("#new-york");
    if (newYorkElement) {
        let newYorkDateElement = document.querySelector(".date");
        let newYorkTimeElement = document.querySelector(".time");
        let newYorkTime = moment().tz("America/New_York");

        newYorkDateElement.innerHTML = newYorkTime.format("dddd, MMMM Do YYYY");
        newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss A");
    }

    // London
    let londonElement = document.querySelector("#london");
    if (londonElement) {
        let londonDateElement = document.querySelector(".date");
        let londonTimeElement = document.querySelector(".time");
        let londonTime = moment().tz("Europe/London");

        londonDateElement.innerHTML = londonTime.format("dddd, MMMM Do YYYY");
        londonTimeElement.innerHTML = londonTime.format("h:mm:ss A");
    }

    // São Paulo
    let brazilElement = document.querySelector("#brazil");
    if (brazilElement) {
        let brazilDateElement = document.querySelector(".date");
        let brazilTimeElement = document.querySelector(".time");
        let brazilTime = moment().tz("America/Sao_Paulo");

        tokyoDateElement.innerHTML = brazilTime.format("dddd, MMMM Do YYYY");
        tokyoTimeElement.innerHTML = brazilTime.format("h:mm:ss A");
    }
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
        <div class="city">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMMM  Do YYYY")}</div>
                <div class="time">${cityTime.format("h:mm:ss A")}</div>
            </div>
        </div>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
