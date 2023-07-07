<template>
  <div class="weather-widget">
    <h2 class="widget-title">Weather Widget</h2>
    <div class="location-input">
      <label for="location">Enter Location:</label>
      <input type="text" id="location" v-model="location" />
      <button @click="fetchWeatherData">Get Weather</button>
    </div>
    <div v-if="weatherData" class="weather-data">
      <p class="location">Location: {{ weatherData.name }}</p>
      <p v-if="weatherData.main" class="temperature">
        Temperature: {{ weatherData.main.temp }}°C
      </p>
      <p v-if="weatherData.weather" class="description">
        Description: {{ weatherData.weather[0].description }}
      </p>
    </div>
    <p v-else>Loading weather data...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: '',
      weatherData: null
    };
  },
  methods: {
    async fetchWeatherData() {
      try {
        const apiKey = 'b7bfca7b27a3485144fea086c50d09dc';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        this.weatherData = data;
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  }
};
</script>

<style scoped>
.weather-widget {
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
}

.widget-title {
  margin-top: 0;
  color: #f76666;
}

.location-input {
  margin-bottom: 10px;
}

.weather-data {
  margin-top: 10px;
}

.location {
  font-size: 18px;
  font-weight: bold;
}

.temperature {
  font-size: 24px;
  color: #ff5722;
}

.description {
  font-size: 16px;
}
.location-input label {
  color: #60baca;
}
.weather-widget p {
  color: #e1ec48;
}
button {
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  width: fit-content;
  cursor: pointer;
  transition: all ease 1ms;
  font-family: inherit;
  font-weight: 500;
  color: #0e0f0e;
  background: #eb5013;
}
</style>
