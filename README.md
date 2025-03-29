Weather App

This is a simple Weather Application that fetches real-time weather data using the OpenWeatherMap API and displays the weather conditions for a given city.

Features

Fetches live weather data based on user input.

Displays the temperature, weather condition, and an emoji representation of the weather.

Provides error handling for invalid city names.

Dynamically updates the UI based on the weather conditions.

Technologies Used

HTML

CSS

JavaScript

OpenWeatherMap API

Setup and Installation

Clone the repository:

git clone https://github.com/annadichandana/weatherdetection.git

Navigate to the project folder:

cd weather-app

Open the index.html file in your browser.

Usage

Enter a city name in the search input.

Click the search button or press enter.

View the weather details displayed on the screen.

API Key

This app uses OpenWeatherMap API. You need to replace api_key in the script with your own API key:

const api_key = "YOUR_API_KEY_HERE";

You can get an API key by signing up at OpenWeatherMap.

Error Handling:

If the user enters an invalid city name, a red error message is displayed.

If there is a network issue, the console logs the error message.


