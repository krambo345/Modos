// load bartender
document.querySelector(".bartender").innerHTML += 
"<div class='clock'><div class='clockl'><span class='mon'></span><span class='dd'></span></div><div class='clockr'><span class='hh'></span><span class='min'></span></div></div><span class='wttr'></span>"
// bartender
// state
// const dayw = document.querySelector(".ddd")
const month = document.querySelector(".mon")
const day = document.querySelector(".dd")
const hour = document.querySelector(".hh")
const minute = document.querySelector(".min")
const ofweek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednsday",
    "Thursday",
    "Friday",
    "Saturday"
]
const ofyear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]
const wttrf = document.querySelector(".wttr")



async function bartender() {
    // Re-fetch Data for Updated Values
    const date = new Date()
    const wttr = await fetch("https://wttr.in/?format=j2")
    if (!wttr.ok) {
        throw new Error('Response Status: ${wttr.status}.')
    }
    const tmp = await wttr.json()
    // Apply Data to bartender
    //    dayw.innerHTML = ofweek[date.getDay()]
    day.innerHTML = ("0" + date.getDate()).slice(-2)
    month.innerHTML = ofyear[date.getMonth()]
    hour.innerHTML = ("0" + date.getHours()).slice(-2) + ":"
    minute.innerHTML = ("0" + date.getMinutes()).slice(-2)


    wttrf.innerHTML = tmp.current_condition[0].temp_C + "°C"
}

// System-wide Update-clock 1 (frequent)

setInterval(bartender, 1000)