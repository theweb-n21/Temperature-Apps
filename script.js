document.getElementById('search-btn').addEventListener('click', function () {
    const inputCity = document.getElementById('search-input').value;
    weatherData(inputCity);


})

const weatherData = (city) => {
    fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6a2fc3e70972479b3cd5dd3e327d1c64`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('city-name').innerText = data.name || "Unknown Location!";
            document.getElementById('temperature').innerText = data.main.temp;
            document.getElementById('weather_status').innerText = data.weather[0].main;
            document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            document.getElementById('search-input').value = ''
        })

}
weatherData("dhaka");