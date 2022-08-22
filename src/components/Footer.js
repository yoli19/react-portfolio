import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'

const Footer = () => {
    return (
        <Container className='pt-2'>
            <Row>
                <Col xs={12} md='auto'>
                    <Nav.Link
                        as='a'
                        className='App-link'
                        href='https://www.linkedin.com/in/yolanda-jacobs-a477a5153/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <i class='fa-brands fa-github'></i> LinkedIn
                    </Nav.Link>
                </Col>
                <Col xs={12} md='auto'>
                    <Nav.Link
                        as='a'
                        className='App-link'
                        href='https://github.com/yoli19'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <i class='fa-brands fa-github'></i> GitHub
                    </Nav.Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
