import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';

export const Banner = () =>{
    const [text, setText] = useState('');

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },200);

        return () => {clearInterval(ticker);}
    });

    const tick = () =>{
        let fullText = "Web Developer";
        let updatedText = fullText.substring(0, text.length + 1);
        setText(updatedText);
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{`Hi I'm Edgar Arellano, `}<span className="wrap">{text}</span></h1>
                        <p>lorem ipsum dolor sit amet, consectetur adip</p>
                        <button onClick={() => console.log("connect")}>Let's connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
};