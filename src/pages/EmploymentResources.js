import { Card, Col, Container, Row } from "react-bootstrap";
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
                <Col className="p-5">
                <Card className="shadow border p-3 mb-2">
                    <h4>Resources</h4>
                    <p><b>The Job Search. How do I get a job - </b>Now you know the kind of job you would like to have. Now you can start searching for that job! This process can be long and require a lot of work. We will explore the basics of the job search. You will learn the basics of writing a resume and cover letter, where to find jobs, how to apply for jobs, interview tips and how to follow up. After exploring the following pages you should be able to be an active and knowledgeable part of your job search with your counselor. <a href="https://imagrownupnowwhat.weebly.com/how-do-i-get-a-job.html">https://imagrownupnowwhat.weebly.com/how-do-i-get-a-job.html</a></p>
                </Card>
                <Card className="shadow border p-3 mb-2">
                    <h4>Resumes and cover letter</h4>
                    <a href="https://imagrownupnowwhat.weebly.com/resumes--cover-letters.html">https://imagrownupnowwhat.weebly.com/resumes--cover-letters.html</a>
                </Card>
                <Card className="shadow border p-3 mb-2">
                    <h4>Application</h4>
                    <a href="https://imagrownupnowwhat.weebly.com/the-application.html">https://imagrownupnowwhat.weebly.com/the-application.html</a>
                </Card>
                <Card className="shadow border p-3 mb-2">
                    <h4>Interview</h4>
                    <a href="https://imagrownupnowwhat.weebly.com/how-do-i-get-a-job.html">https://imagrownupnowwhat.weebly.com/how-do-i-get-a-job.html</a>
                </Card>
                <Card className="shadow border p-3 mb-2">
                    <h4>After the interview</h4>
                    <a href="https://imagrownupnowwhat.weebly.com/the-follow-up.html">https://imagrownupnowwhat.weebly.com/the-follow-up.html</a>
                </Card>
                <Card className="shadow border p-3 mb-2">
                    <h4>You got a job!</h4>
                    <a href="https://imagrownupnowwhat.weebly.com/how-do-i-keep-my-job.html">https://imagrownupnowwhat.weebly.com/how-do-i-keep-my-job.html</a>
                    <p><b>Keeping the employment</b>Keeping employment can sometimes be challenging for individuals who struggle with substance abuse disorders. To assist clients with this phase of employment, it is important to help educate them on appropriate behavior in the workplace, which may vary from workplace to workplace. <a href="https://tasuetoolkit.weebly.com/keeping-employment.html">https://tasuetoolkit.weebly.com/keeping-employment.html</a></p>
                </Card>
                <Card className="shadow border p-3 mb-2">
                    <h4>Job Accomodations</h4>
                    <p>Resources from the another student tool kit of job accommodations</p>
                    <a href="https://tasuetoolkit.weebly.com/keeping-employment.html">https://tasuetoolkit.weebly.com/keeping-employment.html</a>
                </Card>
                <Link className="btn btn-md btn-warning px-5" to="/career-research">Next: Career Research</Link>
                </Col>
            </Row>
            </Container>
        </>
    )
}