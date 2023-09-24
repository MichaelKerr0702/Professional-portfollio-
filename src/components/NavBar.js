import { useEffect, useState } from "react";
import {Nav,Navbar,Container} from "react-bootstrap";
import Logo from '../assets/img/newlogo.png';
import navicon1 from '../assets/img/nav-icon1.svg';
import navicon2 from '../assets/img/nav-icon2.svg';
import navicon3 from '../assets/img/nav-icon3.svg';




export const TopBar = () => {
    const [activelink, setActiveLink] = useState('home');
    const [scrolled, setScroll] = useState(false);

    useEffect(() => { 
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScroll(true)
            }else{
                setScroll(false)
            }
        }
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll',onScroll)
        
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }
    return (
        <Navbar  expand="lg" className={scrolled ? 'scrolled':''}>
        <Container>
          <Navbar.Brand href="#home">
          <img src = {Logo} alt="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className = "navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activelink === 'home' ? "active navbar-link": 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activelink === 'skills' ? "active navbar-link": 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projectCard" className={activelink === 'projects' ? "active navbar-link": 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className = "navbar-text">
                <div className="social-icon">
                    <a href="www.linkedin.com/in/michael-kerr-078299251"><img src={navicon1} alt='linked in'/></a>
                    <a href="#"><img src={navicon2} alt=''/></a>
                    <a href="#"><img src={navicon3} alt=''/></a>
                </div>
            <button className='vvd'><span>lets Connect!</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}