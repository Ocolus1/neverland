import React from 'react';
import  {Row, Col, Container} from "react-bootstrap"
import styles from '../css/Hero.module.css';

const Hero = (props) => {
    return ( 
        <Container>
            <Row  className={styles.row_top}>
                <Col>
                    <h5 className={styles.h5}>ENTER THE FUTURE</h5>
                    <h3  className={styles.h3}>Massive Multiplayer RealEstate Strategy Game on Blockchain</h3>
                    {props.linearBtn("JOIN DISCORD", "https://discord.gg/5AwxJfPy")}
                </Col>
            </Row>
        </Container>
    );
}
 
export default Hero;