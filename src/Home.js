import React,{useEffect ,useRef,useState} from 'react';
import { Button, Carousel } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sound from './assets/thousandyears.mp3'
import sky from './assets/sky.jpg'
import sleep from './assets/sleep.jpg'
import shower from './assets/shower.jpg'


const  CarouselWithMusic =()=>{
   const audioRef = useRef();
   const [index, setIndex] = useState(0);

   const [audioLoaded, setAudioLoaded] = useState(false);
   
   const handleSelect = (selectedIndex) => {
     setIndex(selectedIndex);
   };
   useEffect(() => {
       const handleInteraction = () => {
           if (!audioLoaded) {
               setAudioLoaded(true);
            }
        };
        
       
     document.addEventListener('mousedown', handleInteraction);
     document.addEventListener('touchstart', handleInteraction);
 
     return () => {
       document.removeEventListener('mousedown', handleInteraction);
       document.removeEventListener('touchstart', handleInteraction);
     };
   }, [audioLoaded]);
 
   useEffect(() => {
     if (audioLoaded && audioRef.current) {
       audioRef.current.play();
     }
   }, [audioLoaded]);

    return (
      <div>
        {/* <Slider {...settings}>
          <div>
            <img src={sky} alt="Slide 1" />
            <p>this is beautiful</p>
          </div>
          <div>
            <img src={shower} alt="Slide 2" />
          </div>
          <div>
            <img src={sleep} alt="Slide 3" />
          </div>
        </Slider> */}
         {/* <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={sky} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={shower} roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src={sleep} thumbnail />
        </Col>
      </Row>
    </Container> */}
        <Carousel interval={3000} activeIndex={index} onSelect={handleSelect} wrap={true}>
          <Carousel.Item>
          
            <img className=" d-block w-100 img-fluid" src={sky} alt="Slide 1" />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className=" d-block w-100 img-fluid" src={shower} alt="Slide 2" />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className=" d-block w-100 img-fluid" src={sleep} alt="Slide 3" />
          </Carousel.Item>
        </Carousel>
        {/* <Button onClick={play}>play sound</Button> */}
        <audio ref={audioRef} src={sound} autoPlay loop />
      </div>
    );
}

export default CarouselWithMusic;
