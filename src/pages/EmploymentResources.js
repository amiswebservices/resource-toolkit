import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import image from '../images/employee.jpg'
import { Link } from "react-router-dom";

export default function EmploymentResources(){
    return(
        <>
            <Header />
            <Container>
            <img src={image} alt="employment resources"  className="mx-0 img-fluid"/>
            <Row className="px-3">
                <Col xs={3} className="bg-light">

                </Col>
                <Col className="p-5">
                <h4 className="text-capitalize">Getting Employment</h4>
                <p>Gaining employment requires preparation and skills including job search, marketing/networking, resume building, applying, interviewing, and appropriate education/training. However, many youth are unfamiliar with these aspects of gaining employment. This section will provide resources helpful for the "getting phase" of employment.</p>
                <h5><b>Resources</b></h5>
                <ul>
                    <li><b><a href="http://www.breitlinks.com/careers/career_pdfs/jobsearch.pdf">Job Search Manual</a></b> - Comprehensive manual with everything someone would need to know about searching for and getting a job.</li>
                    <li><b><a href="http://www.breitlinks.com/careers/career_pdfs/networking.pdf">Networking Activity</a></b> - People you know are often excellent sources of information and job leads. This activity helps people consider the people that they know, and teaches them to utilize their contacts as a personal and professional network.</li>
                    <li><b><a href="http://www.breitlinks.com/careers/career_pdfs/cd_rr_e9.pdf">Resume Worksheet</a></b> - Helps youth organize resume content.</li>
                    <li><b><a href="http://www.careeronestop.org/ResumesInterviews/ResumesInterviews.aspx">Resumes, Cover Letters, and Job Interviews</a></b> - Learn how to write a resume, how to write a cover letter, and how to prepare for a job interview.</li>
                    <li><b><a href="https://bigfuture.collegeboard.org/college-search">College Search</a></b> - Helps youth find colleges that align with their future career goals and interests. </li>
                </ul>
                <h5><b>Job Search Engines</b></h5>
                <ul>
                    <li><a href="http://www.indeed.com/">Indeed.com</a></li>
                    <li><a href="http://www.monster.com/">Monster.com</a></li>
                    <li><a href="http://www.careerbuilder.com/">CareerBuilder.com</a></li>
                </ul>
                <Link className="btn btn-md btn-warning px-5" to="/research-and-articles">Next: Research and Articles</Link>
                </Col>
            </Row>
            </Container>
        </>
    )
}