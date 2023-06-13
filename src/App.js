import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import "./components/Navibar";
import Navibar from "./components/Navibar";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";



function App() {
        return (
            <>
                <Navibar />
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="about" element={<AboutPage />} />
            </Routes>
            </>
        );
    }

export default App;

