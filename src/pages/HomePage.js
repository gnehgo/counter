import React from 'react';
import Header from "../components/header/Header";
import "./pagesStyle/homePage.css"



function HomePage(){
    return(
        <>
            <Header />
            <main className="section">
                <div className="container">
                    <h2 className="title-2">Frontend</h2>
                    <p className="content-list">
                        JavaScript, TypeScript, ReactJS, Angular, Redux,
                        HTML, CSS, NPM, BootStrap, MaterialUI, Yarn,
                        TailwindCSS, StyledComponents
                    </p>
                    <h2 className="title-2">Backend</h2>
                    <p className="content-list">
                        NodeJS, MySQL, MongoDB, PHP, Laravel
                    </p>

                </div>
            </main>
        </>
    );
}
export default HomePage;