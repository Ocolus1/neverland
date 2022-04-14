import React from 'react'
import { Row, Col, Container, Stack, Nav } from "react-bootstrap"
import { FaTwitter, FaFacebook, FaDiscord, FaInstagram } from "react-icons/fa";

const DesktopNav = (props) => {

  return (
    <Container fluid>
      <Row className="justify-content-md-between pt-4">
        <Col xs md="3">
          <Stack direction="horizontal" className="my-2" gap={3} style={{ color: "#FFBA00" }}>
            <Nav.Link href="#" style={{ color: "#FFBA00" }}>
              <FaTwitter className="fs-3 mx-3 my-2" />
            </Nav.Link>
            <Nav.Link href="#" style={{ color: "#FFBA00" }}>
              <FaFacebook className="fs-3 mx-3 my-2" />
            </Nav.Link>
            <Nav.Link href="#" style={{ color: "#FFBA00" }}>
              <FaDiscord className="fs-3 mx-3 my-2" />
            </Nav.Link>
            <Nav.Link href="#" style={{ color: "#FFBA00" }}>
              <FaInstagram className="fs-3 mx-3 my-2" />
            </Nav.Link>
          </Stack>
        </Col>
        <Col xs md="4" className="text-center">
          <Stack gap={0} style={{ color: "#FFBA00" }}>
            <h3 className="mt-1"
              style={{
                fontFamily: "Halo",
                fontWeight: "400",
                fontSize: "3em",
              }}
            >NEVERLAND</h3>
            <Nav defaultActiveKey="/home"
              className="justify-content-center my-0 p-0" as="ul">
              <Nav.Item as="li">
                <Nav.Link style={{ color: "#FFBA00" }} href="#">Team</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link style={{ color: "#FFBA00" }} eventKey="link-1">Docs</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link style={{ color: "#FFBA00" }} eventKey="link-2">Dust Contract</Nav.Link>
              </Nav.Item>
            </Nav>
          </Stack>
        </Col>
        <Col xs lg="3" className="text-end pt-2">
          {props.linearBtn("BUY LAND", "#land")}
        </Col>
      </Row>
    </Container>
  );
}


export default DesktopNav