function updateTime() {
    // London
    let londonElement = document.querySelector("#london");
        if (londonElement) {
            let londonDateElement = londonElement.querySelector(".date");
            let londonTimeElement = londonElement.querySelector(".time");
            let londonTime = moment().tz("Europe/London");
    
            londonDateElement.innerHTML = londonTime.format("dddd, MMMM Do YYYY");
            londonTimeElement.innerHTML = londonTime.format("h:mm:ss A");
        }

    // São Paulo
    let saoPauloElement = document.querySelector("#sao-paulo");
    if (saoPauloElement) {
        let saoPauloDateElement = saoPauloElement.querySelector(".date");
        let saoPauloTimeElement = saoPauloElement.querySelector(".time");
        let saoPauloTime = moment().tz("America/Sao_Paulo");

        saoPauloDateElement.innerHTML = saoPauloTime.format("dddd, MMMM Do YYYY");
        saoPauloTimeElement.innerHTML = saoPauloTime.format("h:mm:ss A");
    }
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
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
