import React from 'react'
import Header from '../components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import image from '../images/disability.jpg'
import { Link } from 'react-router-dom'

export default function Home(){
    return(
      <>
      <Header />
      <Container>
        {/* <Row>
            <Col>
                <img src={image} className='w-100' alt="disablity is not the limit" />
            </Col>
        </Row>  */}
        <Row className="mt-2 text-center">
            <Col className="bg-light shadow border p-5">
                <h5>A toolkit for professionals</h5>
                <p>our toolkit aims to bridge the gap between individuals with disabilities and employers, creating opportunities for meaningful employment and fostering inclusive work environments. Together, we can break down barriers, promote diversity, and empower individuals with disabilities to achieve their dreams. Join us in building a more inclusive workforce where everyone has the opportunity to thrive</p>
                <Link to="/about" className="btn btn-warning btn-md">Let's Begin!</Link>
            </Col>
        </Row> 
      </Container>
      </>
    )
}