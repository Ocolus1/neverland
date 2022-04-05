import React from 'react';
import styles from "../css/SectionFour.module.css"


const SectionFour = () => {
    return ( 
        <div className={styles.section_four}>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Poppins:400,500,600,700" rel="stylesheet" /> 
            <section className="experience pt-100 pb-100" id="experience">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 mx-auto text-center">
                            <div className="section-title">
                                <h3 className={styles.h_3}>ROADMAP</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                        <div className={styles.timeline}>
                            <div className={styles.time_hr}></div>
                            <div className={styles.time_div}>
                                <div className={styles.left}>
                                    <div className={styles.content} id={styles.one}>
                                        <div className={styles.tim_p}>
                                            <p className={styles.top}>Community Formation</p>
                                            <p className={styles.time_p}>Discord Community</p>
                                            <p className={styles.time_p}>Twitter Account</p>
                                            <p className={styles.time_p}>White Paper</p>
                                            <p className={styles.time_p}>Github Docs</p>
                                            <p className={styles.time_p}>Website</p>
                                            <p className={styles.time_p}>Medium articles about</p>
                                            <p className={styles.time_p}>tokenomics and upcoming</p>
                                            <p className={styles.time_p}>features</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.time_div}>
                                <div className={styles.right}>
                                    <div className={styles.content} id={styles.two}>
                                        <div className={styles.tim_p}>
                                            <p className={styles.top}>Phase 1</p>
                                            <p className={styles.time_p}>Asset Distribution</p>
                                            <p className={styles.time_p}>NFT launch</p>
                                            <p className={styles.time_p}>NFT listing</p>
                                            <p className={styles.time_p}>In-game assets minting</p>
                                            <p className={styles.time_p}>Game development</p>
                                            <p className={styles.time_p}>Marketplace development</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.time_div}>
                                <div className={styles.left}>
                                    <div className={styles.content} id={styles.three}>
                                        <div className={styles.tim_p}>
                                            <p className={styles.top}>Phase 2</p>
                                            <p className={styles.time_p}>Platform Development</p>
                                            <p className={styles.time_p}>Game explorer</p>
                                            <p className={styles.time_p}>Stats counter</p>
                                            <p className={styles.time_p}>Quests Development</p>
                                            <p className={styles.time_p}>DUST deployment</p>
                                            <p className={styles.time_p}>Assets Auction</p>
                                            <p className={styles.time_p}>DUST Airdrop</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.time_div}>
                                <div className={styles.right}>
                                    <div className={styles.content} id={styles.four}>
                                        <div className={styles.tim_p}>
                                            <p className={styles.top}>Phase 3</p>
                                            <p className={styles.time_p}>Game lunch</p>
                                            <p className={styles.time_p}>NeverLand Beta</p>
                                            <p className={styles.time_p}>Bank Development</p>
                                            <p className={styles.time_p}>Mortgage Development</p>
                                            <p className={styles.time_p}>NFT Plots Integration</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.time_div}>
                                <div className={styles.left}>
                                    <div className={styles.content} id={styles.five}>
                                        <div className={styles.tim_p}>
                                            <p className={styles.top}>Phase 4</p>
                                            <p className={styles.time_p}>Buildings</p>
                                            <p className={styles.time_p}>Warehouse asset</p>
                                            <p className={styles.time_p}>integration</p>
                                            <p className={styles.time_p}>Workshop Integration</p>
                                            <p className={styles.time_p}>Residential house</p>
                                            <p className={styles.time_p}>Integration</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.time_div}>
                                <div className={styles.right}>
                                    <div className={styles.content} id={styles.six}>
                                        <div className={styles.tim_p}>
                                            <p className={styles.top}>Phase 5</p>
                                            <p className={styles.time_p}>Sponsorship and</p>
                                            <p className={styles.time_p}>Scholarship</p>
                                            <p className={styles.time_p}>Scholarship Integration</p>
                                            <p className={styles.time_p}>System</p>
                                            <p className={styles.time_p}>Building renting system</p>
                                            <p className={styles.time_p}>Rewards System</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
 
export default SectionFour;