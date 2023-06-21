import React, {Component, useState} from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import "./components/Navibar";
import Navibar from "./components/Navibar";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import WeatherForm from "./components/WeatherForm";
import data from "bootstrap/js/src/dom/data";
import Weather from "./components/Weather";
import WeatherApp from "./components/WeatherApp";

function App() {
    return (
       <>
           <Navibar />
           <WeatherApp />
       </>
    )
}

export default App;

