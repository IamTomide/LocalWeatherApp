# Local Weather App with React

A weather app built with React, providing real-time weather data and forecasts. Users can search for cities, view detailed weather information, save favorite locations, and easily manage their personalized weather dashboard.


## Features
* City Search with Auto-Suggestions — Powered by Mapbox API for real-time dropdown suggestions while typing.

* Detailed Weather Data — Displays current weather conditions, hourly forecasts, and 7-day outlook from OpenWeather API.

* Dynamic Weather Icons — Visual representation of weather conditions.

* Personalized Home Page — Save favorite cities for quick access without re-searching.

* Manage Saved Cities — Option to delete saved locations anytime.

* Custom Loading State — A custom loading state is displayed while fetching data for a better UX.

* Responsive Design — Optimized for both desktop and mobile devices.

## Tech Stack

* React 

* API Integration — Implemented external APIs for weather data and city search (with dropdown auto-suggestions).

* Custom Hooks & State Management — useContext, useEffect, and a custom useFetch hook for handling API calls and app state.

* Responsive UI Design — Built with clean, mobile-first principles.

* Netlify (Deployment)

Click [here](https://local-weather-application.netlify.app/) to view

## Additional Info
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
