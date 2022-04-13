import React from 'react';
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';

const TouchNav = (props) => {

    return (
        <>

            <Navbar bg="transparent" expand={false} style={{ color: "#FFBA00" }}>
                <Container fluid style={{ color: "#FFBA00" }}>
                    <Navbar.Brand href="#home" 
                        style={{
                            fontFamily: "Halo",
                            fontWeight: "100",
                            fontSize: "1.8em",
                            color: "#FFBA00",
                        }}
                    >NEVERLAND</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" style={{ backgroundColor: "#FFBA00" }}/>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                        style={{ background: "black", color: "#ffffff"}}
                    >
                        <Offcanvas.Header  closeButton closeVariant="white">
                            <Offcanvas.Title id="offcanvasNavbarLabel">MENU</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body >
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1" style={{ color: "#ffffff" }}>TEAM</Nav.Link>
                                <Nav.Link href="#action1" style={{ color: "#ffffff"  }}>DOCS</Nav.Link>
                                <Nav.Link href="#action1" style={{ color: "#ffffff"  }}>DUST CONTRACT</Nav.Link>
                                <Nav.Link href="#action1" style={{ color: "#ffffff" }}>TWITTER</Nav.Link>
                                <Nav.Link href="#action1" style={{ color: "#ffffff"  }}>FACEBOOK</Nav.Link>
                                <Nav.Link href="#action1" style={{ color: "#ffffff"  }}>DISCORD</Nav.Link>
                                <Nav.Link href="#action1" style={{ color: "#ffffff"  }}>INSTAGRAM</Nav.Link>
                                {props.linearBtn("BUY LAND", "#land")}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default TouchNav;