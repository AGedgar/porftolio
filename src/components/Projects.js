import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import colorSharp2 from '../assets/img/color-sharp2.png';

export const Projects = () =>{
    return( 
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                    <h2>Projects</h2>
                    <p>I am currently working at Octosync as a full stack developer where I have been developing web applications for more than two years, you can read a short description of these projects below, i have also worked in IT related jobs before this, you can check my <a href="https://linkedin.com/in/edgarag" target="_blank">LinkedIn</a> account for more information.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Albago</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Maraica</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" >Lotes</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <span>Albago is an ERP developed for a real estate company to cover the needs of administration and management. I worked on the development of the  user management, property management, billing and booking system.</span>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <span>Maraica is an ERP developed for a vacation hotel to cover the administration needs. I worked on the development of room management, booking, billing, user management and concierge. </span>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <span>Lotes is a web application developed for a land sale business to cover their administration and invoicing needs. I worked developing the invoicing module and contract management.</span>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
};