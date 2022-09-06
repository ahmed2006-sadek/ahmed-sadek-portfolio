import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const options = [
    {
      name: 'Enable backdrop (default)',
      scroll: true,
      backdrop: true,
    }]


function Header(){

    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return(
        <>
            <nav>
                <h1><a href='/'>Ahmed Sadek</a></h1>
                <ul>
                    <a href="/"><li><span>Home</span></li></a>
                    <a href="/AboutMe"><li><span>About me</span></li></a>
                    <a href="/CallMe"><li><span>Call me</span></li></a>
                    <a href="/Projcts"><li><span>Projcts</span></li></a>
                </ul>
                <div className="navIcon" onClick={toggleShow}>
                    <span></span>
                    <br />
                    <span></span>
                    <br />
                    <span></span>
                </div>
    
          <Offcanvas id="off" show={show} onHide={handleClose}>
            <Offcanvas.Header id='close' closeButton>
            <Offcanvas.Title>
            <div className="offlogo">
                <h1>Ahmed Sadek</h1>
            </div>      
            </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <ul className='offul'>
                    <a href="/"><li><span>Home</span></li></a>
                    <a href="/AboutMe"><li><span>About me</span></li></a>
                    <a href="/CallMe"><li><span>Call me</span></li></a>
                    <a href="/Projects"><li><span>Projects</span></li></a>
            </ul>
            </Offcanvas.Body>
          </Offcanvas>
            </nav>
        </>
    )
}

export default Header