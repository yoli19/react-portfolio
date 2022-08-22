import React from 'react'
import { Figure, Container, Card, Row, Col } from 'react-bootstrap'

const AboutPage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src="../../public/selfie.jpg"
                        />
                    </Figure>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Bio</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid  id urna ut labore   et dolore magna aliqua. Ut enim adipiscing  elit, sed do eiusmod tempor incidid id urna ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur   adipiscing  elit, sed do eiusmod tempor incidid  id urna ut labore   et dolore magna aliqua.
                            </Card.Text>
                            <Card.Link href="#"></Card.Link>
                            <Card.Link href="#"></Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutPage