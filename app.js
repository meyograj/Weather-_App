const document=document.addEventListener("DOMContentLoaded", function () {
    const apiKey = '461e0b6a72cc03c7e35f1051970de5e1';
    const weatherContainer = document.getElementById("weatherContainer");
    const searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", function () {
        const locationInput = document.getElementById("locationInput").value;
        if (locationInput) {
            fetchWeather(locationInput);
        } else {
            alert("Please enter a location.");
        }
    });

    function fetchWeather(location) {
        // Construct the API URL
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

        // Make an AJAX request to the API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                weatherContainer.innerHTML = "An error occurred. Please try again later.";
            });
    }

    function displayWeather(data) {
        // Extract relevant data from the API response
        const cityName = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        // Display the weather data on the page
        weatherContainer.innerHTML = `
            <h2>Weather in ${cityName}</h2>
            <p>Temperature: ${temperature}°C</p>
            <p>Description: ${description}</p>
        `;
    }
});


