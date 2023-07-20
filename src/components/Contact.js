import { useState } from "react"
import { Col, Row } from "react-bootstrap";
import contactImg from '../assets/img/contact-img.svg'

export const Contact = () => {
    const formInitialDetails={
        firstName:'',
        lastName:'',
        email:'',
        phone: '',
        message: '',
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setbuttonText] = useState('send');
    const [status, setStatus] = useState({});

    const onFormUpdate=(category, value) =>{
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    return(
        <section className="contact" id="connect">
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={contactImg} alt='contact us'/>
                </Col>
                <Col md={6}>
                    <h2> Get in Touch</h2>
                    <form>
                        <Row>
                            <Col sm = {6} className='px-1'>
                                <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e)=> onFormUpdate('firstName', e.target.value)}
                            </Col>
                            <Col sm = {6} className='px-1'>

                            </Col>
                            <Col sm = {6} className='px-1'>

                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </section>
    )
}