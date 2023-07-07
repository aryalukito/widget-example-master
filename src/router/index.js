import { createRouter, createWebHistory } from 'vue-router';

import WeatherWidget from '../components/WeatherWidget.vue';
import LocationWidget from '../components/LocationWidget.vue';
import StopwatchWidget from '../components/StopwatchWidget.vue';
import adunasib from '../components/adunasib.vue';
import PhotoWidget from '../components/PhotoWidget.vue';

const routes = [
  { path: '/', component: WeatherWidget },
  { path: '/location', component: LocationWidget },
  { path: '/stopwatch', component: StopwatchWidget },
  { path: '/tictactoe', component: adunasib },
  { path: '/photo', component: PhotoWidget },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
