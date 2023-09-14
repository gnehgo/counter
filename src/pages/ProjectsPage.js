import React from 'react';
import {Button, Card} from "react-bootstrap";
import styles from "./pagesStyle/projects.module.css"
import {Link} from "react-router-dom";
import {preojectState} from "../store/projectStore";


function ProjectsPage(){
    return(
        preojectState.map( project =>
            <div className={styles.page}>
                <div>
                    <Card className={styles.cards} border={"dark"} style={{ width: '15rem',}}>
                        <Card.Img variant="top" src={project.img}/>
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>
                                {project.text}
                            </Card.Text>
                            <Button variant="dark">
                                <Link className={styles.Link} to={project.url}>
                                    <p1>{project.btn_title}</p1>
                                </Link>
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    )
}
export default ProjectsPage;