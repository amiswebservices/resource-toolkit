import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import image from '../images/employee.jpg'
import { Link } from "react-router-dom";

export default function UnitResources(){
    return(
        <>
        <Header />
        <Container>
        <img src={image} alt="employment resources"  className="mx-0 img-fluid"/>
        <Row className="px-3">
            <Col className="p-5">
            <Card className="shadow border p-3">
            <h4 className="text-capitalize">Support UNT Neurodiversity Network</h4>
            <p>UNT Neurodiversity Network comprises of six existing student supports at UNT. These programs support students in obtaining degrees, gaining skills for independent living, developing self management, gaining employment(both pre and post-graduation) and enhancing their overall “college ”experience . Five out of the six services are housed in the College of Health and Public Service.</p>
            
            <h4 className="text-capitalize">UNT ENGAGE (Embracing Neurodiverse Groups in Academics and Gainful Employment)</h4>
            <p>serves neurodivergent students enrolled at UNT with reaching their academic and vocational goals through person-centered planning and intensive individualized services. Students participate in assessment and planning meetings to identify personal, academic, and vocational goals. Established with support from President Smatresk in 2017 and currently housed in UNT WISE. This program has served 26 students since the 2019-2020 school year and continues to grow. UNT ENGAGE has funding from the Texas Workforce Commission-Vocational Rehabilitation Services and from a private donor.  Contact us at engage@unt.edu</p>
            <h4 className="text-capitalize">TRIO Student Support Services (SSS)</h4>
            <p>Is a federal outreach and student services program designed to identify and provide services to first generation, low income, and students with disabilities by helping them navigate and overcome academic, social, and financial barriers. TRIO SSS is a federally funded academic support and student success program, designed with the purpose and goals of increasing the retention and graduation rates of participating undergraduate students. TRIO SSS is required to provide the following core services to student participants: Academic tutoring and support (including campus resource referrals) Course registration assistance (supplement to primary academic major advisors) Assistance in completion of financial aid applications (FAFSA, UNT GSA) Financial literacy education and counseling Assistance in enrollment to graduate/professional school To learn more about their services, visit their website at: https://studentaffairs.unt.edu/trio</p>
            <h4 className="text-capitalize">Counseling and Testing Services</h4>
            <p>Provides individual counseling, group counseling, and testing services to students.</p>
            <h4 className="text-capitalize">Group Counseling/Workshops: </h4>
            <ul>
            <li>Art Therapy Open Studio (in-person): Art Therapy Open Studio is a safe space to explore and express feelings, manage stress and anxiety, and explore a variety of new art techniques. </li>
            <li>Journaling with a Mindful Approach (in-person): Want to begin journaling, but unsure how to start? Bring your journal and join this workshop to learn new ways to express yourself through mindful tips and prompts. The classes may change each semester, but these have been in the past. Check out their site for updates and how to join any group at <a href="https://studentaffairs.unt.edu/counseling-and-testing-services/services-group-counseling-and-workshops">https://studentaffairs.unt.edu/counseling-and-testing-services/services-group-counseling-and-workshops</a>

            To learn more about their services, visit their website at <a href="https://studentaffairs.unt.edu/student-counseling">https://studentaffairs.unt.edu/student-counseling</a>
            </li>
            </ul>
            <h4 className="text-capitalize">Office of Disability Access:</h4>
            <p>The ODA serves as the central campus resource for the University community in regards to students with disabilities and accommodations to remove barriers to access. For more information or to register for accommodations, please visit <a href="https://studentaffairs.unt.edu/office-disability-access">https://studentaffairs.unt.edu/office-disability-access</a></p>
            <h4 className="text-capitalize">ASD Connect:</h4>
            <p>This group is designed to create peer support, foster awareness, and promote advocacy for the students attending the University of North Texas. This is run through the <a href="https://www.careeronestop.org/localhelp/americanjobcenters/find-american-job-centers.aspxOffice">https://www.careeronestop.org/localhelp/americanjobcenters/find-american-job-centers.aspxOffice</a> of Disability Access (ODA). Reach out to them at  APPLY.ODA@UNT.EDU to let them know you are interested and to find out times, dates, and location. You can also email your ODA coordinator for more details, too! </p>
            
            <h6>UNTWELL provides individual and group counseling, vocational evaluations, and adjunctive therapy services to students. The clinic operates during the Spring, Summer, and Fall semesters providing free, weekly appointments for clients desiring long-term counseling. To learn more or get in contact with UNT WELL, visit their website at <a href="https://hps.unt.edu/rhs/untwell">https://hps.unt.edu/rhs/untwell</a></h6>
            </Card>
            <Link className="btn btn-md btn-warning px-5 mt-3" to="/advocacy-and-support-organizations">Next: Advocacy & Support Organizations</Link>
            </Col>
        </Row>
        </Container>
        </>
    )
}