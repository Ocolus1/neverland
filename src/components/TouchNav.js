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
                            fontSize: "1.5em",
                            color: "#FFBA00",
                        }}
                    >NEVERLAND</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" style={{ backgroundColor: "#FFBA00" }}/>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                        style={{ background: "linear-gradient(95.54deg, #00FF96 6.9%, #007E4A 97%)",}}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">MENU</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body >
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1" style={{ color: "#FFBA00" }}>TEAM</Nav.Link>
                                <Nav.Link href="#action1" style={{ color: "#FFBA00" }}>DOCS</Nav.Link>
                                <Nav.Link href="#action1" style={{ color: "#FFBA00" }}>DUST CONTRACT</Nav.Link>
                                <Nav.Link href="#action1" style={{ color: "#FFBA00" }}>TWITTER</Nav.Link>
                                <Nav.Link href="#action1" style={{ color: "#FFBA00" }}>FACEBOOK</Nav.Link>
                                <Nav.Link href="#action1" style={{ color: "#FFBA00" }}>DISCORD</Nav.Link>
                                <Nav.Link href="#action1" style={{ color: "#FFBA00" }}>INSTAGRAM</Nav.Link>
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