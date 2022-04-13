import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import styles from "../css/SectionTwo.module.css"


const SectionFour = () => {
    return ( 
        <Container fluid 
            className={styles.container}
        >
            <Container>
                <Row className="justify-content-md-center align-items-center">
                    <Col sm={12} md={6} className="p-4 text-center">
                        <p className={styles.p}>
                            Start your journey in real estate entrepreneurship 
                            with your first digital plot. Mine for natural resources 
                            and trade them for digital backed gold. Join the Industrial 
                            revolution on blockchain today.
                        </p>
                        <Button 
                            style={{
                                color: "#FFBA00",
                                backgroundColor: "#0C1012",
                                borderRadius: "10px",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                fontFamily: 'Lora',
                                padding: "10px 20px",
                                border: "none"
                            }}
                        >JOIN DISCORD</Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
 
export default SectionFour;