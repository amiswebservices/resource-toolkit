import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import image from '../images/employee.jpg'
import { Link } from "react-router-dom";

export default function Advocacy(){
    return(
        <>
        <Header />
        <Container>
        <img src={image} alt="employment resources"  className="mx-0 img-fluid"/>
        <Row className="px-3">
            
            <Col className="p-3">
            <Card className="shadow border p-3 mb-3">
            <h4 className="text-capitalize"><a href="https://www.hhs.texas.gov/services/disability">https://www.hhs.texas.gov/services/disability</a></h4>
            <p>The link you provided leads to the Texas Health and Human Services website section on disability services. This section likely contains information about various programs, resources, and support services available to individuals with disabilities in Texas. It may include details about eligibility criteria, application processes, and types of assistance provided. If you're interested in specific details, you can click on the link and explore the content further.</p>
            <h4 className="text-capitalize"><a href="https://www.mhmrtarrant.org/foundation/">https://www.mhmrtarrant.org/foundation/</a></h4>
            <p>The MHMR Foundation raises funds and fosters community support for the people and programs of MHMR. More than 97% of your tax-deductible donations will be used to enhance programs and services for more than 60,000 people supported by MHMR each year, including Disability Services, Early Childhood Services, and Behavioral Health including Substance Use services.</p>
            <h4 className="text-capitalize"><a href="https://www.arcweldcounty.org/who-we-are">https://www.arcweldcounty.org/who-we-are</a></h4>
            <p>The Arc of Weld County is an advocacy organization dedicated to safeguarding the rights of individuals with intellectual and developmental disabilities in Weld County and six surrounding counties: Morgan, Logan, Sedgwick, Phillips, Washington, and Yuma.</p>
            <h4 className="text-capitalize"><a href="https://www.aapd.com/">https://www.aapd.com/</a></h4>
            <p><b>American Association for Persons with Disabilities:</b> Advocacy group serving as a catalyst for change, increasing the political and economic power of people with disabilities.</p>
            <h4 className="text-capitalize"><a href="https://thearc.org/">https://thearc.org/</a></h4>
            <p><b>The Arc:</b>The Arc is the largest national community-based organization advocating for and serving people with intellectual and developmental disabilities and their families. Online resources include disability fact sheets, publications, self-advocacy resources, and more.</p>
            <h4 className="text-capitalize"><a href="https://www.thearcoftexas.org">https://www.thearcoftexas.org</a></h4>
            <p><b>Canine Companions for Independence:</b>This is the website for Canine Companions for Independence, “a non-profit organization that enhances the lives of people with disabilities by providing highly trained assistance dogs and ongoing support.”</p>
            <h4 className="text-capitalize"><a href="https://www.parentcenterhub.org/">https://www.parentcenterhub.org/</a></h4>
            <p><b>Center for Parent Information & Resources:</b> Visit the CPIR\’s Repository of Resources to access a treasure trove of information related to children with disabilities</p>
            <h4 className="text-capitalize"><a href="http://www.disabilitymuseum.org/dhm/index.html">http://www.disabilitymuseum.org/dhm/index.html</a></h4>
            <p><b>Disability History Museum</b>This website is a virtual project of the Disability History Museum, whose mission is to foster a deeper understanding about how changing cultural values, notions of identity, laws and policies have shaped and influenced the experience of people with disabilities, their families and their communities over time.</p>
            <h4 className="text-capitalize"><a href="https://www.disabilityscoop.com/">https://www.disabilityscoop.com/</a></h4>
            <p><b>Disability Scoop: </b>“Disability Scoop is the nation’s premier source for developmental disability news. With daily coverage of autism, intellectual disability, cerebral palsy, Down syndrome and more, no other news source offers a more timely and comprehensive take on the issues that matter to the developmental disability community.”</p>
            <h4 className="text-capitalize"><a href="https://www.disasterstrategies.org/">https://www.disasterstrategies.org/</a></h4>
            <p><b>Partnership for Inclusive Disaster Strategie U.S. </b> disability-led organization with a focused mission of equity for people with disabilities and people with access and functional needs throughout all planning, programs, services and procedures before, during and after disasters and emergencies.</p>
            </Card>
            <Link className="btn btn-md btn-warning px-5" to="/educational-and-informational">Next: Educational and Informational</Link>
            </Col>
        </Row>
        </Container>
        </>
    )
}