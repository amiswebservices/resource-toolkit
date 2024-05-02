import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import image from '../images/employee.jpg'
import { Link } from "react-router-dom";

export default function Research(){
    return(
        <>
            <Header />
            <Container>
            <img src={image} alt="employment resources"  className="mx-0 img-fluid"/>
            <Row className="px-3">
                
                <Col className="p-3">
                <Card className="border shadow mb-2 p-3">
                <h4 className="text-capitalize">Getting Employment</h4>
                <p>Career InfoNet - <a href="https://www.careeronestop.org/Toolkit/ACINet.aspx">https://www.careeronestop.org/Toolkit/ACINet.aspx</a></p>
                </Card>
                <Link className="btn btn-md btn-warning px-5" to="/assessments">Next: Assessments</Link>
                </Col>
            </Row>
            </Container>
        </>
    )
}