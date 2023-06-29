import React from 'react';
import {Button, Card} from "react-bootstrap";
import styles from "./pagesStyle/projects.module.css"
import {Link} from "react-router-dom";


function ProjectsPage(){
    return(
        <div className={styles.body} >
            <Card className={styles.cards} border={"dark"} style={{ width: '15rem',}}>
                <Card.Img variant="top" src="tik-tak-toe.png"/>
                <Card.Body>
                    <Card.Title>tik tak toe game</Card.Title>
                    <Card.Text>
                        Игра крестики нолики
                    </Card.Text>
                    <Button variant="dark">
                        <Link className={styles.Link} to="/game">
                            <p1>Поиграть</p1>
                        </Link>
                    </Button>
                </Card.Body>
            </Card>
            <Card className={styles.cards}  style={{ width: '15rem',}}>
                <Card.Img variant="top" src="weatherCard.png"/>
                <Card.Body>
                    <Card.Title>Weather APP</Card.Title>
                    <Card.Text>
                        Погодное приложение с API
                    </Card.Text>
                    <Button variant="primary">
                        <Link className={styles.Link} to="/weather">
                            <p1>Узнать погоду </p1>
                        </Link>
                    </Button>
                </Card.Body>
            </Card>
            <Card className={styles.cards} border={"dark"} style={{ width: '15rem',}}>
                <Card.Img variant="top" src="ToDoApp.png"/>
                <Card.Body>
                    <Card.Title>ToDo App</Card.Title>
                    <Card.Text>Записная книжка</Card.Text>
                    <Button variant="dark">
                        <Link className={styles.Link} to="/todo">
                            <p1>Сделать запись </p1>
                        </Link>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}
export default ProjectsPage;