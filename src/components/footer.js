import { Col, Container, Row } from "react-bootstrap";
import logo from '../assets/img/newlogo.png';
import navicon1 from '../assets/img/nav-icon1.svg';
import navicon2 from '../assets/img/nav-icon2.svg';
import navicon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt='logo'/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="www.linkedin.com/in/michael-kerr-078299251"><img src={navicon1} alt=''/></a>
                            <a href="#"><img src={navicon2} alt=''/></a>
                            <a href="#"><img src={navicon3} alt=''/></a>
                        </div>
                        <p>CopyRight 2023. All Rights Reserved Michael Kerr</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}