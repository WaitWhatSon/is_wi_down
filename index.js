// test url
const google_url = "https://www.google.com/"

// pages urls
const usos_url = "https://usosweb.pb.edu.pl/"
const wi_url = "https://wi.pb.edu.pl/"
const degra_url = "https://degra.wi.pb.edu.pl/"
const cez2_url = "https://cez2.wi.pb.edu.pl/"
const lit_url = "http://lit.wi.pb.edu.pl/"
const aragorn_url = "http://aragorn.pb.bialystok.pl/"

// weather url
const weather_url = "https://api.open-meteo.com/v1/forecast?latitude=53.1333&longitude=23.1643&hourly=temperature_2m,precipitation,weathercode&current_weather=true&past_days=1&forecast_days=3"

// create loaders view
const loadersDiv = document.getElementById("loaders_div")

function addLoader(url) {

    let cardEnvelope = document.createElement("div");
    cardEnvelope.classList.add("flex", "items-center", "w-full", "sm:w-full", "md:w-1/2", "lg:w-1/3", "xl:w-1/3");

    let card = document.createElement("div");
    card.classList.add("flex", "grid", "grid-cols-6", "items-center", "w-full", "bg-white", "m-3", "py-3", "rounded-2xl", "shadow-2xl");

    let pageUrl = document.createElement("div");
    pageUrl.classList.add("col-span-3", "h-fill", "flex", "items-center", "pl-5");
    pageUrl.innerHTML = `<span class="inline-block align-middle h-fill"><a href=${url} target="_blank">${url.replace("https://", "").replace("http://", "").replace("/", "")}</a></span>`;

    let loaderDiv = document.createElement("div");
    loaderDiv.classList.add("flex", "col-span-2", "justify-center", "items-center", "right-0");
    loaderDiv.id = `${url}_loader_div`

    let loader = document.createElement("div");
    loader.classList.add("loader");
    loader.id = `${url}_loader`
    loaderDiv.append(loader);

    let timerDiv = document.createElement("div");
    timerDiv.classList.add("flex", "justify-center", "items-center");
    timerDiv.id = `${url}_timer_div`

    let timer = document.createElement("div");
    timer.id = `${url}_timer`
    timer.innerHTML = "...";
    timerDiv.appendChild(timer);

    card.append(pageUrl);
    card.append(loaderDiv);
    card.append(timerDiv);

    cardEnvelope.append(card);
    loadersDiv.append(cardEnvelope);

}

addLoader(wi_url);
addLoader(usos_url);
addLoader(degra_url);
addLoader(cez2_url);
addLoader(lit_url);
addLoader(aragorn_url);

// GET pages
async function getPage(url) {

    let dateStart = Date.now();

    fetch(url, {
        method: 'GET',
        headers: {
            accept: 'application/json',
        },
    })
        .then(() => { console.log("OK") })
        .catch((error) => { console.log("XDDDD"); console.log(error) })
        .finally((response) => {
            console.log(response)
            let time = Date.now() - dateStart;
            displayResult(url, time);
        })
}

function displayResult(url, time) {
    let loaderDiv = document.getElementById(`${url}_loader_div`);
    loaderDiv.classList.add("text-2xl");

    if (time < 3000) {
        // loaderDiv.innerHTML = "✅🥰"
        loaderDiv.innerHTML = "<img src='./img/emojis/ok.svg' alt='OK' width='35px'><img src='./img/emojis/hearts.svg' alt='HEARTS' width='35px'>"
    }
    else {
        // loaderDiv.innerHTML = "❌💀"
        loaderDiv.innerHTML = "<img src='./img/emojis/x.svg' alt='X' width='35px'><img src='./img/emojis/skull.svg' alt='SKULL' width='35px'>"
    }

    let timerDiv = document.getElementById(`${url}_timer_div`);
    timerDiv.innerHTML = `${time} ms`;
}

// TODO: commented untill ui done

// Calling that async functions
// getPage(wi_url);
// getPage(usos_url);
// getPage(degra_url);
// getPage(cez2_url);
// getPage(lit_url);
// getPage(aragorn_url);



let weather_json = null;

// TEMP VARIABLE FOR UI DESIGN
weather_json = JSON.parse(`{"latitude":53.125,"longitude":23.1875,"generationtime_ms":0.6389617919921875,"utc_offset_seconds":0,"timezone":"GMT","timezone_abbreviation":"GMT","elevation":134,"current_weather":{"temperature":19.6,"windspeed":10.8,"winddirection":285,"weathercode":3,"is_day":1,"time":"2023-07-22T16:00"},"hourly_units":{"time":"iso8601","temperature_2m":"°C","precipitation":"mm","weathercode":"wmo code"},"hourly":{"time":["2023-07-21T00:00","2023-07-21T01:00","2023-07-21T02:00","2023-07-21T03:00","2023-07-21T04:00","2023-07-21T05:00","2023-07-21T06:00","2023-07-21T07:00","2023-07-21T08:00","2023-07-21T09:00","2023-07-21T10:00","2023-07-21T11:00","2023-07-21T12:00","2023-07-21T13:00","2023-07-21T14:00","2023-07-21T15:00","2023-07-21T16:00","2023-07-21T17:00","2023-07-21T18:00","2023-07-21T19:00","2023-07-21T20:00","2023-07-21T21:00","2023-07-21T22:00","2023-07-21T23:00","2023-07-22T00:00","2023-07-22T01:00","2023-07-22T02:00","2023-07-22T03:00","2023-07-22T04:00","2023-07-22T05:00","2023-07-22T06:00","2023-07-22T07:00","2023-07-22T08:00","2023-07-22T09:00","2023-07-22T10:00","2023-07-22T11:00","2023-07-22T12:00","2023-07-22T13:00","2023-07-22T14:00","2023-07-22T15:00","2023-07-22T16:00","2023-07-22T17:00","2023-07-22T18:00","2023-07-22T19:00","2023-07-22T20:00","2023-07-22T21:00","2023-07-22T22:00","2023-07-22T23:00","2023-07-23T00:00","2023-07-23T01:00","2023-07-23T02:00","2023-07-23T03:00","2023-07-23T04:00","2023-07-23T05:00","2023-07-23T06:00","2023-07-23T07:00","2023-07-23T08:00","2023-07-23T09:00","2023-07-23T10:00","2023-07-23T11:00","2023-07-23T12:00","2023-07-23T13:00","2023-07-23T14:00","2023-07-23T15:00","2023-07-23T16:00","2023-07-23T17:00","2023-07-23T18:00","2023-07-23T19:00","2023-07-23T20:00","2023-07-23T21:00","2023-07-23T22:00","2023-07-23T23:00","2023-07-24T00:00","2023-07-24T01:00","2023-07-24T02:00","2023-07-24T03:00","2023-07-24T04:00","2023-07-24T05:00","2023-07-24T06:00","2023-07-24T07:00","2023-07-24T08:00","2023-07-24T09:00","2023-07-24T10:00","2023-07-24T11:00","2023-07-24T12:00","2023-07-24T13:00","2023-07-24T14:00","2023-07-24T15:00","2023-07-24T16:00","2023-07-24T17:00","2023-07-24T18:00","2023-07-24T19:00","2023-07-24T20:00","2023-07-24T21:00","2023-07-24T22:00","2023-07-24T23:00"],"temperature_2m":[12.4,11.9,11.3,10.9,11.8,13.4,15.5,17.2,18.2,19.5,20.1,21.1,21.3,21.5,21.8,21.9,21.6,21,20,18.6,17.2,15.3,14.9,14.7,13.8,13.4,13.5,13.8,14.5,15,15.2,15.6,16.1,16.5,17.7,18.5,18.6,19.4,20.3,20.3,19.6,18.6,17.8,16.4,15.8,15.3,14.3,13.8,13.2,12.6,12.1,11.6,12.2,13.8,15.4,17,18.8,20.1,21.5,21.7,20.9,21.3,20.6,20.6,20.2,19.5,18.9,18.2,17.7,17.3,16.9,16.8,16.2,16.3,16.2,16.1,16.4,17,17.4,18.2,19.3,18.6,18.8,20.6,21.8,22.8,22.9,23.5,23.5,22.6,21,19.6,19.5,19.1,18.7,18.7],"precipitation":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.9,0.6,2.4,3,2.3,1.9,0.8,1.2,0.1,0,0,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.5,0.1,0.1,0.2,0,0,0,0,0,0,0,0.4,0.2,0,0,0,0,0,0,0,0,0,0,0,0,0],"weathercode":[2,1,1,1,2,2,1,2,2,2,3,3,3,2,2,2,1,1,2,1,3,2,2,2,2,2,3,3,3,61,61,61,95,95,95,95,80,2,2,2,3,2,2,3,3,1,3,2,0,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,61,3,61,61,3,3,3,3,3,3,3,61,61,3,2,3,3,2,2,3,1,3,3,3,3,2]}}`);
console.log(weather_json);

// TODO: commented until ui done


async function getWeather(){

    try {
        const response = await fetch(weather_url);
        const jsonData = await response.json();
    
        console.log(JSON.stringify(jsonData));
        weather_json = jsonData;
        drawWeather(weather_json);
    }
    catch(e){
        console.log(e);
    }

}

// canvas

const canvas = document.getElementById('precipitation-canvas');
const ctx = canvas.getContext("2d");

// on page resize
window.addEventListener("resize", () => {
    drawWeather(weather_json);
});

const iconsDiv = document.getElementById("weather_icons_div")
const blue = "#3b82f6";

function drawWeather(weather_json) {
    if(weather_json == null)
    {
        return;
    }

    const weatherArraySize = weather_json.hourly.time.length;

    let maxP = Math.max(...weather_json.hourly.precipitation);
    if (maxP < 5) { maxP = 5; }

    document.getElementById("max_mm").innerHTML = `${maxP} mm`;

    const heightRatio = canvas.height / maxP;

    const widthP = canvas.width / weatherArraySize

    for (let i = 0; i < weatherArraySize; i++) {
        let heightP = weather_json.hourly.precipitation[i] * heightRatio;

        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.strokeStyle = blue;
        ctx.fillStyle = blue;
        ctx.fillRect(i * widthP, canvas.height - heightP, widthP, heightP);
        ctx.stroke();
    }

    iconsDiv.innerHTML = "";

    for (let i = 0; i < 8; i++) {
        let val = mode(weather_json.hourly.weathercode.slice(i * 12, (i + 1) * 12));

        let newDiv = document.createElement("div");

        // weather decision:
        switch (val) {
            case 0: // 0	Clear sky
                // newDiv.innerHTML = "☀️";
                newDiv.innerHTML = "<img src='./img/emojis/sunny.svg' alt='SUNNY' width='30px'>"
                break;
            case 1: // 1, 2, 3	Mainly clear, partly cloudy, and overcast
                // newDiv.innerHTML = "🌤";
                newDiv.innerHTML = "<img src='./img/emojis/sunny_partialy_cloudy.svg' alt='SUNNY PARTIALY CLOUDY' width='30px'>"
                break;
            case 2:
                // newDiv.innerHTML = "⛅️";
                newDiv.innerHTML = "<img src='./img/emojis/cloudy_sunny.svg' alt='CLOUDY SUNNY' width='30px'>"
                break;
            case 3:
                // newDiv.innerHTML = "☁️";
                newDiv.innerHTML = "<img src='./img/emojis/cloudy.svg' alt='CLOUDY' width='30px'>"
                break;
            case 45: // 45, 48	Fog and depositing rime fog
                // newDiv.innerHTML = "🌫";
                newDiv.innerHTML = "<img src='./img/emojis/foggy.svg' alt='FOGGY' width='30px'>"
                break;
            case 48:
                // newDiv.innerHTML = "🌫";
                newDiv.innerHTML = "<img src='./img/emojis/foggy.svg' alt='FOGGY' width='30px'>"
                break;
            case 51: // 51, 53, 55	Drizzle: Light, moderate, and dense intensity
                // newDiv.innerHTML = "🌧";
                newDiv.innerHTML = "<img src='./img/emojis/rainy.svg' alt='RAINY' width='30px'>"
                break;
            case 53:
                // newDiv.innerHTML = "🌧";
                newDiv.innerHTML = "<img src='./img/emojis/rainy.svg' alt='RAINY' width='30px'>"
                break;
            case 55:
                newDiv.innerHTML = "🌧";
                break;
            case 56: // 56, 57	Freezing Drizzle: Light and dense intensity
                // newDiv.innerHTML = "🌧";
                newDiv.innerHTML = "<img src='./img/emojis/rainy.svg' alt='RAINY' width='30px'>"
                break;
            case 57:
                // newDiv.innerHTML = "🌧";
                newDiv.innerHTML = "<img src='./img/emojis/rainy.svg' alt='RAINY' width='30px'>"
                break;
            case 61: // 61, 63, 65	Rain: Slight, moderate and heavy intensity
                // newDiv.innerHTML = "🌧";
                newDiv.innerHTML = "<img src='./img/emojis/rainy.svg' alt='RAINY' width='30px'>"
                break;
            case 63:
                // newDiv.innerHTML = "🌧";
                newDiv.innerHTML = "<img src='./img/emojis/rainy.svg' alt='RAINY' width='30px'>"
                break;
            case 65:
                // newDiv.innerHTML = "🌧";
                newDiv.innerHTML = "<img src='./img/emojis/rainy.svg' alt='RAINY' width='30px'>"
                break;
            case 66: // 66, 67	Freezing Rain: Light and heavy intensity
                // newDiv.innerHTML = "🌧";
                newDiv.innerHTML = "<img src='./img/emojis/rainy.svg' alt='RAINY' width='30px'>"
                break;
            case 67:
                // newDiv.innerHTML = "🌧";
                newDiv.innerHTML = "<img src='./img/emojis/rainy.svg' alt='RAINY' width='30px'>"
                break;
            case 71: // 71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
                // newDiv.innerHTML = "🌨";
                newDiv.innerHTML = "<img src='./img/emojis/snowy.svg' alt='SNOWY' width='30px'>"
                break;
            case 73:
                // newDiv.innerHTML = "🌨";
                newDiv.innerHTML = "<img src='./img/emojis/snowy.svg' alt='SNOWY' width='30px'>"
                break;
            case 75:
                // newDiv.innerHTML = "🌨";
                newDiv.innerHTML = "<img src='./img/emojis/snowy.svg' alt='SNOWY' width='30px'>"
                break;
            case 77: // 77	Snow grains
                // newDiv.innerHTML = "🌨";
                newDiv.innerHTML = "<img src='./img/emojis/snowy.svg' alt='SNOWY' width='30px'>"
                break;
            case 80: // 80, 81, 82	Rain showers: Slight, moderate, and violent
                // newDiv.innerHTML = "🌧";
                newDiv.innerHTML = "<img src='./img/emojis/rainy.svg' alt='RAINY' width='30px'>"
                break;
            case 81:
                // newDiv.innerHTML = "🌧";
                newDiv.innerHTML = "<img src='./img/emojis/rainy.svg' alt='RAINY' width='30px'>"
                break;
            case 82:
                // newDiv.innerHTML = "🌧";
                newDiv.innerHTML = "<img src='./img/emojis/rainy.svg' alt='RAINY' width='30px'>"
                break;
            case 85: // 85, 86	Snow showers slight and heavy
                // newDiv.innerHTML = "🌨";
                newDiv.innerHTML = "<img src='./img/emojis/snowy.svg' alt='SNOWY' width='30px'>"
                break;
            case 86:
                // newDiv.innerHTML = "🌨";
                newDiv.innerHTML = "<img src='./img/emojis/snowy.svg' alt='SNOWY' width='30px'>"
                break;
            case 95: // 95 *	Thunderstorm: Slight or moderate
                // newDiv.innerHTML = "🌦";
                newDiv.innerHTML = "<img src='./img/emojis/rainy_sunny.svg' alt='RAINY SUNNY' width='30px'>"
                break;
            case 96: // 96, 99 *	Thunderstorm with slight and heavy hail
                // newDiv.innerHTML = "🌩";
                newDiv.innerHTML = "<img src='./img/emojis/thunder.svg' alt='THUNDER' width='30px'>"
                break;
            case 99:
                // newDiv.innerHTML = "⛈";
                newDiv.innerHTML = "<img src='./img/emojis/storm.svg' alt='STORM' width='30px'>"
                break;
            default:
                // newDiv.innerHTML = "⛅️";
                newDiv.innerHTML = "<img src='./img/emojis/cloudy_sunny.svg' alt='CLOUDY SUNNY' width='30px'>"
        }

        newDiv.classList.add("flex", "justify-center", "items-center");
        iconsDiv.appendChild(newDiv);

    }
}

const mode = arr => {
    const mode = {};
    let max = 0, count = 0;

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];

        if (mode[item]) {
            mode[item]++;
        } else {
            mode[item] = 1;
        }

        if (count < mode[item]) {
            max = item;
            count = mode[item];
        }
    }

    return max;
};


// getWeather();

drawWeather(weather_json);


// document.head.appendChild(Object.assign(document.createElement("link"), {rel: "icon", href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👽</text></svg>"}))
// let wut = document.createElement("div")
// wut.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👽</text></svg>";
// document.getElementById("temp").appendChild(wut);
