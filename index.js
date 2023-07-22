// test url
const google_url = "https://www.google.com/"

// pages urls
const usos_url =    "https://usosweb.pb.edu.pl/"
const wi_url =      "https://wi.pb.edu.pl/"
const degra_url =   "https://degra.wi.pb.edu.pl/"
const cez2_url =    "https://cez2.wi.pb.edu.pl/"
const lit_url =     "http://lit.wi.pb.edu.pl/"
const aragorn_url = "http://aragorn.pb.bialystok.pl/"

// create loaders view
const loadersDiv = document.getElementById("loaders_div")

function addLoader(url)
{
    let pageUrl = document.createElement("div");
    pageUrl.innerHTML = url;

    let loaderDiv = document.createElement("div");
    loaderDiv.id = `${url}_loader_div`

    let loader = document.createElement("div");
    loader.classList.add("loader");
    loader.id = `${url}_loader`
    loaderDiv.append(loader);

    let timerDiv = document.createElement("div");
    timerDiv.id = `${url}_timer_div`

    let timer = document.createElement("div");
    timer.id = `${url}_timer`
    timer.innerHTML = "0 ms";
    timerDiv.appendChild(timer);

    loadersDiv.append(pageUrl);
    loadersDiv.append(loaderDiv);
    loadersDiv.append(timerDiv);
    
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

function displayResult(url, time){
    let loaderDiv = document.getElementById(`${url}_loader_div`);

    if(time < 3000){
        loaderDiv.innerHTML = "🥰"
    }
    else{
        loaderDiv.innerHTML = "💀"
    }

    let timerDiv = document.getElementById(`${url}_timer_div`);
    timerDiv.innerHTML = `${time} ms`;
}

// Calling that async functions
getPage(wi_url);
getPage(usos_url);
getPage(degra_url);
getPage(cez2_url);
getPage(lit_url);
getPage(aragorn_url);

