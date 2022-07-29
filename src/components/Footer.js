import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-logo.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () =>{
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={12} className="text-right text-sm-end">
                        <div className="social-icon">
                            <a href="https://linkedin.com/in/edgarag" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="linkedIn"/></a>
                            <a href="https://github.com/AGedgar" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="github"/></a>
                            <a href="https://instagram.com/edgararellanog/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="instagram"/></a>
                        </div>
                        <p>Contact me!</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}