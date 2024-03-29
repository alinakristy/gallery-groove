import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

// images
import alina from '../assets/alina.jpeg'
import najma from '../assets/najma.png'
import sara from '../assets/sara.png'
import xanthe from '../assets/xanthe.jpeg'

function About() {
    return <CardGroup>
        <Card style={{ width: '18rem' }} className='px-2 py-2'>
            <Card.Img variant="top" src={alina} className='rounded'/>
            <Card.Body>
                <Card.Title>Alina-Cristi Osipov</Card.Title>
                <Card.Text>
                Innovative frontend maestro, turning code into captivating interfaces. HTML, CSS, and JavaScript are my playground. Let's build something amazing together!
                </Card.Text>
                <div className="d-flex justify-content-lg-center" style={{ gap: '1rem' }}>
                    <a className='btn btn-secondary px-1 py-1 col-4' href='https://github.com/alinakristy'><FaGithub size={32}/></a>
                    <a className='btn btn-primary px-1 py-1 col-4' href='https://www.linkedin.com/in/alina-cristi-osipov/'><FaLinkedinIn size={32}/></a>
                </div>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className='px-2 py-2'>
            <Card.Img variant="top" src={sara} className='rounded'/>
            <Card.Body>
                <Card.Title>Sara Badini Confalonieri</Card.Title>
                <Card.Text>
                Pixel perfectionist and coding enthusiast. Crafting user experiences that not only look good but feel intuitive. Excited to bring creativity to your frontend projects!
                </Card.Text>
                <div className="d-flex justify-content-lg-center" style={{ gap: '1rem' }}>
                    <a className='btn btn-secondary px-1 py-1 col-4' href='https://github.com/Sara-Badini-Confalonieri'><FaGithub size={32}/></a>
                    <a className='btn btn-primary px-1 py-1 col-4' href='https://www.linkedin.com/in/sara-badini-confalonieri-594975b4/'><FaLinkedinIn size={32}/></a>
                </div>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className='px-2 py-2'>
            <Card.Img variant="top" src={xanthe} className='rounded'/>
            <Card.Body>
                <Card.Title>Xanthe Horner</Card.Title>
                <Card.Text>
                Passionate about blending design and functionality. HTML and CSS whisperer, with a knack for making websites sing. Let's create a seamless user journey for everyone!
                </Card.Text>
                <div className="d-flex justify-content-lg-center" style={{ gap: '1rem' }}>
                    <a className='btn btn-secondary px-1 py-1 col-4' href='https://github.com/xanlefee'><FaGithub size={32}/></a>
                    <a className='btn btn-primary px-1 py-1 col-4' href='https://www.linkedin.com/in/xanthe-horner/'><FaLinkedinIn size={32}/></a>
                </div>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className='px-2 py-2'>
            <Card.Img variant="top" src={najma} className='rounded'/>
            <Card.Body>
                <Card.Title>Najma Musa</Card.Title>
                <Card.Text>
                Frontend enthusiast with a keen eye for detail. JavaScript ninja by day, CSS wizard by night. Ready to transform ideas into visually stunning digital realities aka websites.
                </Card.Text>
                <div className="d-flex justify-content-lg-center" style={{ gap: '1rem' }}>
                    <a className='btn btn-secondary px-1 py-1 col-4' href='https://github.com/najmamusa'><FaGithub size={32}/></a>
                    <a className='btn btn-primary px-1 py-1 col-4' href='http://www.linkedin.com/in/najmamusa'><FaLinkedinIn size={32}/></a>
                </div>
            </Card.Body>
        </Card>

    </CardGroup>
}


export default About;