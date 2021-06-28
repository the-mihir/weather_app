let weather = {
    "apiKey": "ac6a199ccb194b304553805352a402e5",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        +"&units=metric&appid=" 
        + this.apiKey
        )
      
        .then((Response) => Response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log( name,icon,description,temp,humidity,speed);
    
        document.querySelector(".city") .innerText = "Weather in " + name;
        document.querySelector(".icon") .src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
    }
};

