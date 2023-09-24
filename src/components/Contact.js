import { useState } from "react"
import { Button, Col, Row } from "react-bootstrap";
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setbuttonText("Sending...");
        let response = await fetch("http://loacalhost:3000/contact",{
            method: "POST",
            headers: {
                'Content-Type' : 'Application/json;charset=utf-8',
            },
            body: JSON.stringify(formDetails),
        });
        setbuttonText('Send');
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({success : true, message: "Message sent!"});
        } else {
            setStatus({success : false, message: 'Message failed please try again later...'})
        }
    }
    return(
        <section className="contact" id="connect">
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={contactImg} alt='contact us'/>
                </Col>
                <Col md={6}>
                    <h2> Get in Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm = {6} className='px-1'>
                                <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e)=> onFormUpdate('firstName', e.target.value)}/>
                            </Col>
                            <Col sm = {6} className='px-1'>
                                <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e)=> onFormUpdate('lastName', e.target.value)}/>
                            </Col>
                            <Col sm = {6} className='px-1'>
                                <input type='email' value={formDetails.email} placeholder='Email Adress' onChange={(e)=> onFormUpdate('email', e.target.value)}/>
                            </Col>
                            <Col sm = {6} className='px-1'>
                                <input type='tel' value={formDetails.phone} placeholder='Phone No.' onChange={(e)=> onFormUpdate('phone', e.target.value)}/>
                            </Col>
                            <Col sm = {6} className='px-1'>
                                <textarea row = '6' value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)}/>
                                <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                    <p className={status.success=== false ? "danger" : "success"}>{status.message} </p>
                                    
                                </Col>
                            }

                        </Row>
                    </form>
                </Col>
            </Row>
        </section>
    )
}