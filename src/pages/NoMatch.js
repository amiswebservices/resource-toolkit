import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Header';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

export default function NoMatch(){
    return(
        <>
        <Header />
        <Container>
            <Row>
                <Col className='pt-5'>
                    <Card className="text-center bg-light shadow bt-2" >
                        <Card.Body>
                            <h1 style={{fontSize: '9rem', fontWeight: 'bold'}}>404</h1>
                            <h1 style={{fontSize: '4rem', fontWeight: 'bold'}}>NOT FOUND</h1>
                            <Button variant="primary" href="/" className='mt-5 px-5 py-2'>Go Home</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}