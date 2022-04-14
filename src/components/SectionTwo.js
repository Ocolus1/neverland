import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "../css/SectionTwo.module.css"
import land from "../img/sec_two_floating_land.png"


const SectionTwo = () => {
    return (
        <Container fluid 
            className={styles.container_for_all}
        >
            <Container>
                <Row className="justify-content-md-center align-items-center">
                    <Col sm={12} md={6} className="p-4">
                        <h2 className={styles.h2}>OWN A PLOT</h2>
                        <p className={styles.p}>
                            Start your journey in real estate entrepreneurship 
                            with your first digital plot. Mine for natural resources 
                            and trade them for digital backed gold. Join the Industrial 
                            revolution on blockchain today.
                        </p>
                    </Col>
                    <Col sm={12} md={6}>
                        <img src={land} className={styles.img} alt="Floating land" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default SectionTwo;