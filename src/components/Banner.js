import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import {ArrowRightCircle} from 'react-bootstrap-icons'
import headerimg from '../assets/img/header-img.svg'
import 'animate.css';
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Banner = () =>{
    const [loopNum, setloopNum] = useState(0)
    const [isDeleting, setisDeleting] = useState(false)
    const toRoatate = ['Full Stack Web Developer', 'Front-end Web Developer', 'Back-end Web Developer', 'Software Engeneer']
    const [text, settext] = useState('')
    const [delta, setdelta] = useState(300 - Math.random() * 100)
    const period = 1000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)
        return() => {clearInterval(ticker)}
    },[text])

    const tick  = () => {
        let i = loopNum % toRoatate.length;
        let fullText = toRoatate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        settext(updatedText);

        if(isDeleting){
            setdelta(prevDelta => prevDelta / 2);

        }

        if(!isDeleting && updatedText === fullText){
            setisDeleting(true);
            setdelta(period);

        } else if (isDeleting && updatedText ===''){
            setisDeleting(false);
            setloopNum(loopNum + 1);
            setdelta(500)
        }
    }
    return (
        <section className = 'banner' id='home'>
            <Container>
                <Row classname='align-items-center'>
                  <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                    <div className={isVisible ? 'animate__animated animate___fadein' : ''}>
                      <span className='tagline'>Welcome to my Portfolio</span>
                      <h1>{`Hi I'm Michael a`}<span className="wrap"> {text}</span></h1>
                      <p>I build quality products to fit my clients needs</p>
                      <button onClick={() => console.log('connect')}>Lets Connect<ArrowRightCircle size={25}/></button>
                      </div>}
                      </TrackVisibility>
                  </Col>  
                  <Col xs={12} md={6} xl={5}>
                      <img src={headerimg} alt="headder"></img>
                  </Col>
                </Row>
            </Container>
        </section>
    )
}