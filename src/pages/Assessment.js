import { Card, Col, Container, Row } from "react-bootstrap";
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
            {/* <Col xs={3} className="bg-light d-none d-lg-block d-md-block">

            </Col> */}
            <Col className="p-5">
            <Card className="border shadow p-3 mb-2">
            <h4 className="text-capitalize">Mental Health Assessments</h4>
            <ul>
                <li><a href="https://unitedwaydenton.crediblemind.com/assessments">https://unitedwaydenton.crediblemind.com/assessments</a></li>
                <li><a href="http://www.nlm.nih.gov/medlineplus/mentalhealth.html">http://www.nlm.nih.gov/medlineplus/mentalhealth.html</a></li>
                <li><a href="http://www.dentonmhmr.org">http://www.dentonmhmr.org</a></li>
                <li><a href="http://www.nami.org/">http://www.nami.org/</a></li>
                <li><a href="http://www.nami.org/">http://www.nami.org/</a></li>
            </ul>
            </Card>
            <Card className="border shadow p-3 mb-2">
            <h4 className="text-capitalize">Assessments to explore Interests</h4>
            <ul>
            <li>
            <h4>Intrest assessment </h4>
            <a href="https://imagrownupnowwhat.weebly.com/interests.html">https://imagrownupnowwhat.weebly.com/interests.html</a>
            </li>
            <li>
            <h4>My skill</h4>
            <a href='https://imagrownupnowwhat.weebly.com/my-skills-and-experience.html'>https://imagrownupnowwhat.weebly.com/my-skills-and-experience.html</a>
            </li>
            <li>
            <h4>O*NET Skills Search</h4>	
            <a href='http://www.onetonline.org/skills/'>http://www.onetonline.org/skills/</a>
            </li>
            <li>
            <h4>My Preferences</h4>
            <a href='https://imagrownupnowwhat.weebly.com/preferences.html'>https://imagrownupnowwhat.weebly.com/preferences.html</a>
            </li>
            <li>
            <h4>Choosing a Career</h4>
            <a href='https://imagrownupnowwhat.weebly.com/choosing-a-career.html'>https://imagrownupnowwhat.weebly.com/choosing-a-career.html</a>
            </li>
            <li>
            <h4>Career Interest Game</h4>
            <a href='http://career.missouri.edu/index.php/career-interest-game'>http://career.missouri.edu/index.php/career-interest-game</a>
            </li>
            </ul>
            </Card>
            <Card className="border shadow p-3 mb-2">
            <h4 className="text-capitalize">Assessments to Explore Personality</h4>
            <ul>
                <li>The Keirsey Temperament Sorter II	<a href="http://www.keirsey.com/sorter/register.aspx">http://www.keirsey.com/sorter/register.aspx</a></li>
                <li>"Personality Pathways <a href="http://www.personalitypathways.com/type_inventory.html">http://www.personalitypathways.com/type_inventory.html</a></li>
            </ul>
            </Card>
            <Card className="border shadow p-3 mb-2">
            <h4 className="text-capitalize">Assessments to Explore Skills</h4>
            <ul>
                <li>"O*NET Skills Search <a href="http://www.onetonline.org/skills/">http://www.onetonline.org/skills/</a></li>
                <li>"Career InfoNet Skills Profiler	<a href="http://www.careerinfonet.org/skills/">http://www.careerinfonet.org/skills/</a></li>
                <li>"ISEEK Skills Assessment <a href="http://www.iseek.org/careers/skillsAssessment">http://www.iseek.org/careers/skillsAssessment</a></li>
            </ul>
            </Card>
            <Card className="border shadow p-3 mb-2">
            <h4 className="text-capitalize">Assessments to explore values</h4>
            <ul>
                <li>O*NET Work Importance Profiler	<a href="http://www.onetcenter.org/WIP.html">http://www.onetcenter.org/WIP.html</a></li>
            </ul>
            </Card>
            <Link className="btn btn-md btn-warning px-5" to="/">Home</Link>
            </Col>
        </Row>
        </Container>
    </>
    )
}