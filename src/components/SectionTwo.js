import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "../css/SectionTwo.module.css"
import land from "../img/sec_two_floating_land.png"
import land_sm from "../img/preview_three.png"
import useProgressiveImg from "./useProgressiveImg";


const SectionTwo = () => {
    const [src, { blur }] = useProgressiveImg(land_sm, land);
    return (
        <Container fluid
            className={styles.container}
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
                        {/* <img src={land} className={styles.img} alt="Floating land" /> */}
                        <img
                            src={src}
                            className={styles.img} 
                            style={{
                                filter: blur ? "blur(20px)" : "none",
                                transition: blur ? "none" : "filter 0.3s ease-out"
                            }}
                            alt="Floating land"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default SectionTwo;