const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=9593b6de1c5a4563a44180951242410&q=${city}&aqi=no`);
    var data= await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".region").innerHTML = data.location.region;
    document.querySelector(".temp").innerHTML = Math.floor(data.current.temp_c) +"°c";
    document.querySelector(".humidity").innerHTML = data.current.humidity +"%";
    document.querySelector(".wind").innerHTML = data.current.wind_kph +"km/h";
    let condition=data.current.condition.text;
    console.log(condition)
    const clear="./images/clear.png";
    const clouds="./images/clouds.png";
    const drizzle="./images/drizzle.png";
    const mist="./images/mist.png";
    const rain="./images/rain.png";

    if(condition==="Sunny" || condition==="Clear"){
        document.querySelector(".weather-icon").setAttribute("src",clear);

    }
    else if(condition==="Clouds"){
        document.querySelector(".weather-icon").setAttribute("src", clouds);
    }
    else if(condition==="Partly cloudy"){
        document.querySelector(".weather-icon").setAttribute("src", drizzle);
    }
    else if(condition==="Mist"){
        document.querySelector(".weather-icon").setAttribute("src", mist);
    }
    else if(condition==="Rain" || condition==="Light rain"){
        document.querySelector(".weather-icon").setAttribute("src", rain);
    }

}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


