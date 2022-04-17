import React from 'react';
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';
import { FaTwitter, FaFacebook, FaDiscord, FaInstagram } from "react-icons/fa";

const TouchNav = (props) => {

    return (
        <>

            <Navbar bg="transparent" expand={false} style={{ color: "#FFBA00" }}>
                <Container fluid style={{ color: "#FFBA00" }}>
                    <Stack gap={3}>
                        <div className=" text-end">
                        <Navbar.Toggle aria-controls="offcanvasNavbar" style={{ 
                            backgroundColor: "#FFBA00",
                            marginRight: ".3em"
                        }}/>
                        <Navbar.Offcanvas
                            className=""
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="end"
                            style={{ 
                                background: "black", 
                                color: "#FFBA00",
                                fontFamily: 'Poppins',
                                
                            }}
                        >
                            <Offcanvas.Header  closeButton closeVariant="white">
                                <Offcanvas.Title id="offcanvasNavbarLabel">MENU</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body >
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1" style={{ color: "#FFBA00" }}>TEAM</Nav.Link>
                                    <Nav.Link href="#action1" style={{ color: "#FFBA00"  }}>DOCS</Nav.Link>
                                    <Nav.Link href="#action1" style={{ color: "#FFBA00"  }}>DUST CONTRACT</Nav.Link>
                                    <Stack direction="horizontal" 
                                    className="my-2 me-5  position-absolute bottom-0 start-0" 
                                    gap={3} style={{ color: "#FFBA00" }}>
                                        <Nav.Link href="https://twitter.com/NEVERLAND_NFT?t=cjipYjQ020LLWgU0POiR8w&s=09" 
                                            target="_blank"  style={{ color: "#FFBA00" }}>
                                            <FaTwitter className="fs-3 mx-3 my-2"  />
                                        </Nav.Link>
                                        <Nav.Link href="https://discord.gg/5AwxJfPy" target="_blank"  style={{ color: "#FFBA00" }}>
                                            <FaDiscord className="fs-3 mx-3 my-2" />
                                        </Nav.Link>
                                        {/* <Nav.Link href="#"  style={{ color: "#FFBA00" }}>
                                            <FaFacebook className="fs-3 mx-3 my-2" />
                                        </Nav.Link>
                                        <Nav.Link href="#"  style={{ color: "#FFBA00" }}>
                                            <FaInstagram className="fs-3 mx-3 my-2" />
                                        </Nav.Link> */}
                                    </Stack>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        </div>
                        <div className="justify-content-md-center p-1  mb-0">
                            <Nav.Link href="#home" className=" mx-auto "
                                style={{
                                    fontFamily: "Halo",
                                    fontWeight: "400",
                                    fontSize: "2em",
                                    color: "#FFBA00",
                                    width: "fit-content"
                                }}
                            >NEVERLAND</Nav.Link>
                        </div>
                    </Stack>
                </Container>
            </Navbar>
        </>
    );
}

export default TouchNav;