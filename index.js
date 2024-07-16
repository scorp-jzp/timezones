function updateTime() {
    // New York
    let newYorkElement = document.querySelector("#new-york");
    if (newYorkElement) {
        let newYorkDateElement = newYorkElement.querySelector(".date");
        let newYorkTimeElement = newYorkElement.querySelector(".time");
        let newYorkTime = moment().tz("America/New_York");
    
        newYorkDateElement.innerHTML = newYorkTime.format("MMMM	Do YYYY");
        newYorkTimeElement.innerHTML = newYorkTime.format(
            "h:mm:ss [<small>]A[</small>]"
        );
    }
    // Monaco
    let monacoElement = document.querySelector("#monaco");
    if (monacoElement) {
        let monacoDateElement = monacoElement.querySelector(".date");
        let monacoTimeElement = monacoElement.querySelector(".time");
        let monacoTime = moment().tz("Europa/Monaco");
    
        monacoDateElement.innerHTML = monacoTime.format("MMMM	Do YYYY");
        monacoTimeElement.innerHTML = monacoTime.format(
            "h:mm:ss [<small>]A[</small>]"
        );
    }
    // Tokyo
    let tokyoElement = document.querySelector("#tokyo");
    if (tokyoElement) {
        let tokyoDateElement = tokyoElement.querySelector(".date");
        let tokyoTimeElement = tokyoElement.querySelector(".time");
        let tokyoTime = moment().tz("Asia/Tokyo");
    
        tokyoDateElement.innerHTML = tokyoTime.format("MMMM	Do YYYY");
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
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
        <div class="city">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
            "A"
            )}</small></div>
        </div>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);