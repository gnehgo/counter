import React from 'react';
import Header from "../components/header/Header";
import "./pagesStyle/homePage.css"



function HomePage(){
    return(
         <div className="page">
            <Header />
                    <h2 className="title-2">Frontend</h2>
                    <p className="content-list">
                        JavaScript, ReactJS, Redux,
                        HTML, CSS, BootStrap, StyledComponents
                    </p>
                    <h2 className="title-2">Backend</h2>
                    <p className="content-list">
                        NodeJS, MySQL, Python, Flask, Django, Java
                    </p>
                    <h2 className="title-2">Personal</h2>
                    <p className="content-list">
                        Responsibility, Quick learner, Creativity, Interest,
                        Motivation,Stress resistance, Analytical mind
                    </p>
                </div>
    );
}
export default HomePage;