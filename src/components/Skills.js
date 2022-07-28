import { Container, Row, Col } from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import javascriptLogo from '../assets/img/javascript-logo.svg';
import nextLogo from '../assets/img/next-js-logo.svg';
import nodejsLogo from '../assets/img/node-js-logo.svg';
import reactLogo from '../assets/img/react-logo.svg';
import htmlLogo from '../assets/img/html-logo.svg';
import cssLogo from '../assets/img/css-logo.svg';
import mySqlLogo from '../assets/img/mysql-logo.svg';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () =>{
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };

      return(
          <section className="skill" id="skills">
              <Container>
                  <Row>
                      <Col>
                      <div className="skill-bx">
                          <h2>
                              Skills
                          </h2>
                          <p>These are some of the technologies I have worked with</p>
                          <Carousel responsive={responsive} infinite={true} className="skill-slider">
                              <div className="item">
                                  <img src={javascriptLogo} alt="Image" />
                                  <h5>JavaScript</h5>
                              </div>
                              <div className="item">
                                  <img src={reactLogo} alt="Image" />
                                  <h5>React JS</h5>
                              </div>
                              <div className="item">
                                  <img src={nextLogo} alt="Image" />
                                  <h5>Next JS</h5>
                              </div>
                              <div className="item">
                                  <img src={htmlLogo} alt="Image" />
                                  <h5>HTML</h5>
                              </div>
                              <div className="item">
                                  <img src={cssLogo} alt="Image" />
                                  <h5>CSS</h5>
                              </div>
                              <div className="item">
                                  <img src={nodejsLogo} alt="Image" />
                                  <h5>Node JS</h5>
                              </div>
                              <div className="item">
                                  <img src={mySqlLogo} alt="Image" />
                                  <h5>MySQL</h5>
                              </div>
                          </Carousel>
                      </div>
                      </Col>
                  </Row>
              </Container>
              <img className="background-image-left" src={colorSharp} />
          </section>
      )
};