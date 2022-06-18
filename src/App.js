import React from "react"
import { Button, Card, Col, Container, Image, ListGroup, Nav, Row } from 'react-bootstrap';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Nav className="justify-content-center fixed">
                    <Nav.Item>
                        <Nav.Link href="#">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#ach">Achievement</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Contact Me</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Container className="p-5 text-center" bg="secondary" fluid>
                    <Image src={process.env.PUBLIC_URL + "/logo.webp"} roundedCircle className="w-50" />
                    <h1>Welcome to my Web Site</h1>
                </Container>
                <Container className="p-5 text-center bg-secondary text-white" fluid>
                    <h6>My name is Habibie Lukmanul Hakim, I am {(new Date().getFullYear())-2012} years old</h6>
                </Container>
                <h1 className="text-center mt-5" id="ach">My Achievements</h1>
                <Row>
                    <Col className="m-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.sman2tpi.sch.id/images/WhatsApp-Image-2020-10-05-at-184617-678x381.jpeg" />
                            <Card.Body>
                                <Card.Title>KSN</Card.Title>
                                <Card.Text>
                                    🥈 Silver Medal
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="m-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>OSA</Card.Title>
                                <Card.Text>
                                    🥇 2<sup>th</sup> Gold Award
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <h2 className="text-center">Contact Me At</h2>
                <Row>
                    <Col className="m-3">
                        <h6>Email: habibie.lukman@gmail.com</h6>
                    </Col>
                </Row>
            </div>
        )
    }
}