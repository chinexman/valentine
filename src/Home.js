import React,{useEffect ,useRef,useState} from 'react';
import { Button, Carousel } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sound from './assets/thousandyears.mp3'
import sky from './assets/sky.jpg'
import sleep from './assets/sleep.jpg'
import shower from './assets/shower.jpg'
import './home.css'



const  CarouselWithMusic =()=>{
   const audioRef = useRef();
   const [index, setIndex] = useState(0);
   const [audioPlaying, setAudioPlaying] = useState(true);

   const [audioLoaded, setAudioLoaded] = useState(false);
   console.log("audioLoaded",audioLoaded)

   const toggleAudio = () => {
    if (audioPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setAudioPlaying(!audioPlaying);
  };
   
   const handleSelect = (selectedIndex) => {
     setIndex(selectedIndex);
   };
//    useEffect(() => {
//        const handleInteraction = () => {
//            if (!audioLoaded) {
//                setAudioLoaded(true);
//             }
//         };
        
       
//      document.addEventListener('mousedown', handleInteraction);
//      document.addEventListener('touchstart', handleInteraction);
 
//      return () => {
//        document.removeEventListener('mousedown', handleInteraction);
//        document.removeEventListener('touchstart', handleInteraction);
//      };
//    }, [audioLoaded]);

 
//    useEffect(() => {
//      if (audioLoaded && audioRef.current) {
//        audioRef.current.play();
//      }
//    }, [audioLoaded]);
function play(){
    audioRef.current.play();

}

//    useEffect(()=>{
//     setTimeout(()=>{

//     play();
//     },5000)
//    },[])

    return (
      <div  className='background-container'>
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
      
        <Carousel  interval={3000} activeIndex={index} onSelect={handleSelect} wrap={true}>
          <Carousel.Item >
          <div className='image-container'>

            <img className="first" src={sky} alt="Slide 1" />
            <Carousel.Caption>
            <h3 className='val-col'>My valentine</h3>
            <p className='val-col'>Home is wherever I'm with you.</p>
          </Carousel.Caption>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className='image-container'>

            <img className=" first" src={shower} alt="Slide 2" />
            <Carousel.Caption>
            <h3 className='val-col'>My valentine</h3>
            <p className='val-col'>We have a forever type of love.</p>
          </Carousel.Caption>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className='image-container'>

            <img className="first" src={sleep} alt="Slide 3" />
            <Carousel.Caption>
            <h3 className='val-col'>My valentine</h3>
            <p className='val-col'>To the only person I would share my snacks with.</p>
          </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
        <Button   className='valentine'      style={{ backgroundColor: audioPlaying ? 'white' : 'red', color:audioPlaying ?  'red' : 'white' }}
 onClick={toggleAudio}>{audioPlaying ? 'Pause Audio' : 'Play Audio'}</Button>
        <audio ref={audioRef} src={sound} autoPlay loop />
      </div>
    );
}

export default CarouselWithMusic;
