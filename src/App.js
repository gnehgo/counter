import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import "./components/Navibar";
import Navibar from "./components/Navibar";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import Footer from "./components/footer/Footer";
import {WeatherPage} from "./pages/WeatherPage";
import {ToDoPage} from "./pages/ToDoPage";
import {GamePage} from "./pages/GamePage";

function App() {
    return (
       <>
           <Navibar />
           <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/weather" element={<WeatherPage />} />
                <Route path="/todo" element={<ToDoPage />} />
                <Route path="/game" element={<GamePage />} />
           </Routes>
           <Footer />


       </>
    )
}

export default App;

