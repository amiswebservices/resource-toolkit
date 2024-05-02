import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Col, Container, Row } from "react-bootstrap";
import image from '../images/employee.jpg'

export default function EducationResources(){
    return(
        <>
            <Header />
            <Container>
            <img src={image} alt="employment resources"  className="mx-0 img-fluid"/>
            <Row className="px-3">
                <Col xs={3} className="bg-light">

                </Col>
                <Col className="p-5">
                <h1>Educating the professionals</h1>
                <p>The following articles and resources provide information for professionals regarding working with transition age youth with substance use disorders who are transitioning into employment.</p>
                <ul>
                    <li><b>Substance Use Disorders and Vocational Rehabilitation</b> - VR Counselor's Desk Reference</li>
                    <li><b>Understanding Substance Abuse in Adolescents</b> - "Describes the scope and nature of substance abuse among adolescents." - NCTSN</li>
                    <li><b>Office of Disability Employment Policy: Youth</b> - "What all youth need to successfully transition into adulthood." - ODEP</li>
                    <li><b>National Collaborative on Workforce and Disability</b> - Information about employment and youth with disabilities. </li>
                    <li><b>Advising Youth with Disabilities on Disclosure</b>: Tips for Service Providers</li>
                </ul>
                <Link className="btn btn-md btn-warning px-5" to="/employment-resources">Next: Employment Resources</Link>
                </Col>
            </Row>
            </Container>
        </>
    )
}