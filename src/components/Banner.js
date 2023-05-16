import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import {ArrowRightCircle} from 'react-bootstrap-icons'
import headerimg from '../assets/img/header-img.svg'
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
                      <span className='tagline'>Welcome to my Portfolio</span>
                      <h1>{`Hi I'm Michael a`}<span className="wrap"> {text}</span></h1>
                      <p>LOREMTN DFISJF SD DSIFNSODFI DFOIJDFOIJFD DSIJFO DSFIDJF SDOIFJ DFOIJDF DOIJF SOI j</p>
                      <button onClick={() => console.log('connect')}>Lets Connect<ArrowRightCircle size={25}/></button>
                  </Col>  
                  <Col xs={12} md={6} xl={5}>
                      <img src={headerimg} alt="headder"></img>
                  </Col>
                </Row>
            </Container>
        </section>
    )
}