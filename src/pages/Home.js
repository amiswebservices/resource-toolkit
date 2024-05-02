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
        <Row>
            <Col>
                <img src={image} className='w-100' alt="disablity is not the limit" />
            </Col>
        </Row> 
        <Row className="mt-2 text-center">
            <Col className="bg-light shadow border p-5">
                <h5>A toolkit for professionals</h5>
                <p>This toolkit provides a number of resources, articles, activities, and assessments from different sources to help educate and guide professionals working with transition age youth with substance use disorders who are transitioning into employment. It is organized into pages based on topic, including educational information regarding working with transition age youth with substance use disorders.</p>
                <Link to="/educational-resources" className="btn btn-warning btn-md">Let's Begin!</Link>
            </Col>
        </Row> 
      </Container>
      </>
    )
}