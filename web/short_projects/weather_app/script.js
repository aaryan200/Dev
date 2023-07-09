const wrapper = document.querySelector(".wrapper"),
    inputPart = wrapper.querySelector(".input-part"),
    infoTxt = inputPart.querySelector(".info-txt"),
    inputField = inputPart.querySelector("input"),
    locationBtn = inputPart.querySelector("button"),
    wIcon = document.querySelector(".weather-part img"),
    arrowBack = wrapper.querySelector("header i");

let api;

// listen to every key being pressed
// keydown listen to every key pressed
// while keyup listen to key released
inputField.addEventListener("keyup", (e) => {
    if (e.key == 'Enter' && inputField.value != "") {
        requestApi(inputField.value);
    }
})

locationBtn.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
        alert("Your browser doesn't support geolocation");
    }
});

function onSuccess(position) {
    const { latitude, longitude } = position.coords;
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    fetchData();
}

function onError(error) {
    infoTxt.innerText = error.message;
    infoTxt.classList.add("error");
}

function requestApi(city) {
    // console.log(city);
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    fetchData();
}

function fetchData() {
    infoTxt.innerText = "Getting weather details...";
    infoTxt.classList.add("pending");
    fetch(api).then(response => response.json()).then(result => weatherDetails(result));
}

function weatherDetails(info) {
    if (info.cod == "404") {
        infoTxt.innerText = `${inputField.value} isn't a valid city name`;
        infoTxt.classList.replace("pending", "error");
    }
    else {
        const city = info.name;
        const country = info.sys.country;
        const {description, id} = info.weather[0];
        const {feels_like, humidity, temp} = info.main;

        if (id==800) {
            wIcon.src = "weather_icons/clear.svg";
        } else if (id >= 200 && id<=232) {
            wIcon.src = "weather_icons/storm.svg";
        }
        else if (id >= 600 && id <= 622) {
            wIcon.src = "weather_icons/snow.svg"
        }
        else if (id >= 701 && id <= 781) {
            wIcon.src = "weather_icons/haze.svg"
        }
        else if (id >= 801 && id <= 804) {
            wIcon.src = "weather_icons/cloud.svg"
        }
        else if ((id >= 300 && id <= 321) || (id >= 500 && id <= 531)) {
            wIcon.src = "weather_icons/rain.svg"
        }

        wrapper.querySelector(".temp .numb").innerText = Math.floor(temp);
        wrapper.querySelector(".weather").innerText = description;
        wrapper.querySelector(".location span").innerText = `${city}, ${country}`;
        wrapper.querySelector(".temp .numb-2").innerText = Math.floor(feels_like);
        wrapper.querySelector(".humidity span").innerText = `${humidity}%`;
        
        infoTxt.classList.remove("pending", "error");
        wrapper.classList.add("active");
    }
    // console.log(info);
}

arrowBack.addEventListener("click", () => {
    wrapper.classList.remove("active");
    inputField.value = "";
})