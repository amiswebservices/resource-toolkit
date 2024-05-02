import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import image from '../images/employee.jpg'
import { Link } from "react-router-dom";

export default function Assessment(){
    return(
        <>
        <Header />
        <Container>
        <img src={image} alt="employment resources"  className="mx-0 img-fluid"/>
        <Row className="px-3">
            <Col xs={3} className="bg-light d-none d-lg-block d-md-block">

            </Col>
            <Col className="p-5">
            <h4 className="text-capitalize">Other Resources</h4>
            <p>Americans with Disabilities Act</p>
            <ul>
                <li className="mt-3 vw-50%">
                    <a href="https://tasuetoolkit.weebly.com/uploads/1/9/7/5/19756431/1679884_orig.gif"><img className="img-fluid" src="https://tasuetoolkit.weebly.com/uploads/1/9/7/5/19756431/1679884_orig.gif" alt="addiction resource guide" /></a>
                </li>
                <li className="mt-3 vw-50%">
                    <a href="http://www.asam.org/"><img className="img-fluid" src="https://tasuetoolkit.weebly.com/uploads/1/9/7/5/19756431/4928333_orig.jpg" alt="ASAM" /></a>
                </li>
                <li className="mt-3 vw-50%">
                    <a href="http://www.samhsa.gov/"><img className="img-fluid" src="https://tasuetoolkit.weebly.com/uploads/1/9/7/5/19756431/4264405_orig.png" alt="SAMHSA" /></a>
                </li>
                <li className="mt-3 vw-50%">
                    <a href="https://tasuetoolkit.weebly.com/uploads/1/9/7/5/19756431/6153618_orig.jpg"><img className="img-fluid" src="https://tasuetoolkit.weebly.com/uploads/1/9/7/5/19756431/6153618_orig.jpg" alt="ODEP" /></a>
                </li>
            </ul>
            <Link className="btn btn-md btn-warning px-5" to="/">Home</Link>
            </Col>
        </Row>
        </Container>
    </>
    )
}