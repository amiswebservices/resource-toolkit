import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Card, Col, Container, Row } from "react-bootstrap";
import image from '../images/employee.jpg'

export default function EducationResources(){
    return(
        <>
            <Header />
            <Container>
            <img src={image} alt="employment resources"  className="mx-0 img-fluid"/>
            <Row className="px-3">
                
                <Col className="p-5">
                <Card className="shadow border p-3">
                    <h4>organizations</h4>
                    <ul>
                        <li><a href="http://www.disabilityrightstx.org/">"http://www.disabilityrightstx.org/</a></li>
                        <li><b>Brookes Publishing	:</b>This web site provides a directory of products and services for individuals with disabilities.<a href="https://brookespublishing.com/">https://brookespublishing.com/</a></li>
                        <li><b>"Center for Parent Information & Resources</b>Visit the CPIR\’s Repository of Resources to access a treasure trove of information related to children with disabilities. <a href="https://www.parentcenterhub.org">https://www.parentcenterhub.org</a></li>
                        <li><b>Disability History Museum</b>This website is a virtual project of the Disability History Museum, whose mission is to foster a deeper understanding about how changing cultural values, notions of identity, laws and policies have shaped and influenced the experience of people with disabilities, their families and their communities over time. <a href="http://www.disabilitymuseum.org/dhm/index.html">http://www.disabilitymuseum.org/dhm/index.html</a></li>
                        <li><b>disABILITY Information and Resources</b>This is a large compilation of web links to disability resources, communities, and databases. The web site was created and is maintained by Jim Lubin, who is a C2 quadriplegic, using a keyboard/mouse emulator with a sip and puff switch to type morse codes.<a href="http://www.makoa.org/">http://www.makoa.org/</a></li>
                        <li><b>Disability Scoop: </b>Disability Scoop is the nation’s premier source for developmental disability news. With daily coverage of autism, intellectual disability, cerebral palsy, Down syndrome and more, no other news source offers a more timely and comprehensive take on the issues that matter to the developmental disability community.<a href="https://www.disabilityscoop.com/">https://www.disabilityscoop.com/</a></li>
                        <li><b>Exceptional Parent Magazine</b> This is the online version of Exceptional Parent Magazine, “providing information, support, ideas, encouragement, and outreach for parents and families of children with disabilities and the professionals who work with them. <a href="https://www.eparent.com/">https://www.eparent.com/</a></li>
                    </ul>
                </Card>
                <Card className="shadow mt-2 p-3">
                    <h4>Resources</h4>
                    <p>Job Search Manual - Comprehensive manual with everything someone would need to know about searching for and getting a job. <a href="http://www.breitlinks.com/careers/career_pdfs/jobsearch.pdf">http://www.breitlinks.com/careers/career_pdfs/jobsearch.pdf</a></p>
                </Card>
                <Card className="shadow my-2 p-3">
                    <h4>Educating the professional</h4>
                    <p>The following articles and resources provide information for professionals regarding working with transition age youth with substance use disorders who are transitioning into employment. <a href="https://tasuetoolkit.weebly.com/educating-the-professional.html">https://tasuetoolkit.weebly.com/educating-the-professional.html</a></p>
                </Card>
                <Link className="btn btn-md btn-warning px-5" to="/employment-career-development">Next: Employee Career Development</Link>
                </Col>
            </Row>
            </Container>
        </>
    )
}