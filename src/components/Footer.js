import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
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
                            <a href=""><img src={navIcon1} /></a>
                            <a href=""><img src={navIcon2} /></a>
                            <a href=""><img src={navIcon3} /></a>
                        </div>
                        <p>Contact me!</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}