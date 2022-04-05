import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "../css/SectionThree.module.css"

const SectionThree = () => {
    return (
        <Container fluid
            className={styles.container}
        >
            <Container>
                <h2 className={styles.h2}>GAME FEATURES</h2>
                <Row className="justify-content-md-center align-items-center">
                    <Col xs={12} sm={6} md={4} className={styles.col} >
                        <div >
                            <h5 className={styles.h5}>PLOTS</h5>
                            <p className={styles.p}>
                                Own a piece of land on the NeverLand blockchain.
                                Lands can be mined for their natural resources and
                                used to contribute to the neverland economy.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4} className={styles.col} >
                        <div >
                            <h5 className={styles.h5}>RESOURCES</h5>
                            <p className={styles.p}>
                                Different natural resources exist inside the game 
                                with different plots possessing some of them. 
                                Plot purchased as NFT mint will 
                                determine the resource players get inside the game.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4} className={styles.col} >
                        <div >
                            <h5 className={styles.h5}>MORTGAGE</h5>
                            <p className={styles.p}>
                                Players will be able to mortgage off their land in form of 
                                lending and build factories on the land using 
                                the mortgage bank and repay in form of loans.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center align-items-center">
                    <Col xs={12} sm={6} md={4} className={styles.col}>
                        <div >
                            <h5 className={styles.h5}>MARKETPLACE</h5>
                            <p className={styles.p}>
                                Players can exchange mined resources for gold 
                                and dust by selling them to other players on 
                                the marketplace Other players then use 
                                these resources to build their own factories
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4} className={styles.col}>
                        <div >
                            <h5 className={styles.h5}>EQUIPMENT</h5>
                            <p className={styles.p}>
                                Players can purchase mining and farming 
                                equipments to use on their plots to make 
                                resource mining faster and more convenient.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4} className={styles.col}>
                        <div >
                            <h5 className={styles.h5}>DUST STATION</h5>
                            <p className={styles.p}>
                                Dust station is the border station that links 
                                NevrLand to modern day economy. It cts as a 
                                bureau de change for al resources entering 
                                and exiting the NevrLand paradise.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default SectionThree;