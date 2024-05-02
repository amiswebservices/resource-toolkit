import React from 'react'
import Header from '../components/Header'
import { Card, Col, Container, Row } from 'react-bootstrap'
import image from '../images/employee.jpg'
import { Link } from 'react-router-dom'

export default function About(){
    return(
        <>
        <Header />
        <Container>
        <img src={image} alt="employment resources"  className="mx-0 img-fluid"/>
        <Row className="px-3">
            {/* <Col xs={3} className="bg-light d-none d-lg-block d-md-block">

            </Col> */}
            <Col className="p-3">
            <Card className="border shadow p-3 mb-2"><h4 className="text-capitalize">About me:</h4>
            <p>Meet Kavya, an ongoing Rehabilitation Counseling master's student at University of North Texas dedicated to advocating for individuals with disabilities. With a passion for promoting inclusion and accessibility, Kavya is committed to bridging the gap between individuals with disabilities and employers ensuring equal opportunities for all.</p>
            </Card>
            <Link className="btn btn-md btn-warning px-5" to="/unt-resources-for-neuro-divergent">Next: Unit Resources for Neuro Divergent</Link>
            </Col>
        </Row>
        </Container>
        </>
    )
}