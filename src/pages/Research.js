import { Col, Container, Row } from "react-bootstrap";
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
                <Col xs={3} className="bg-light d-none d-lg-block d-md-block">

                </Col>
                <Col className="p-5">
                <h4 className="text-capitalize">Getting Employment</h4>
                <p>Here is where you can get some evidence-based information about IDD and transitioning</p>
                <h5><b>Resources</b></h5>
                <ul>
                    <li><b><a href="http://www.breitlinks.com/careers/career_pdfs/jobsearch.pdf">Article 01</a></b></li>
                    <li><b><a href="http://www.psychosocial.com/IJPR_7/approach.html">Article 2</a></b></li>
                    <li><b><a href="http://www.onenet.net/~home/milestone/VI%20Mental%20Health.html">Choose-Get-Keep</a></b> - Helps youth organize resume content.</li>
                    <li><b><a href="http://www.ovid.com/webapp/wcs/stores/servlet/product_Journal-of-Intellectual-Disability-Research_13051_-1_13151_Prod-265?cmpid=Journals%20Landing:%20RecommendHumTech%20-%20Journal%20of%20Intellectual%20Disability%20Research">Research</a></b></li>
                    <li><b><a href="http://www.waisman.wisc.edu/family/pubs/w-adl/2012EvaluationADLScaleForAdolescents.pdf">Additional Research</a></b></li>
                </ul>
                <Link className="btn btn-md btn-warning px-5" to="/other-resources">Next: Other resources</Link>
                </Col>
            </Row>
            </Container>
        </>
    )
}