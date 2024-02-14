import React,{useRef,useState} from 'react';
import { Button, Carousel } from 'react-bootstrap';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sound from './assets/thousandyears.mp3'
import sky from './assets/sky.jpg'
import sleep from './assets/sleep.jpg'
import shower from './assets/shower.jpg'
// import valentine1 from './assets/valentine1.jpg'
import valentine2 from './assets/valentine2.jpeg'
import valentine3 from './assets/valentine3.jpeg'
import valentine4 from './assets/valentine4.jpeg'
import valentine5 from './assets/valentine5.jpeg'
import valentine6 from './assets/valentine6.jpeg'
import valentine8 from './assets/valentine8.jpeg'
import valentine9 from './assets/valentine9.jpeg'
// import valentine10 from './assets/valentine10.jpeg'
import valentine11 from './assets/valentine11.jpeg'
import valentine12 from './assets/valentine12.jpeg'
import valentine14 from './assets/valentine14.jpeg'
import valentine15 from './assets/valentine15.jpeg'
import valentine16 from './assets/valentine16.jpeg'
import valentine18 from './assets/valentine18.jpeg'
import valentine19 from './assets/valentine19.jpeg'
import valentine21 from './assets/valentine21.jpeg'
import valentine23 from './assets/valentine23.jpeg'
import valentine24 from './assets/valentine24.jpeg'
import valentine25 from './assets/valentine25.jpeg'
import valentine26 from './assets/valentine26.jpeg'
import valentine27 from './assets/valentine27.jpeg'
import valentine31 from './assets/valentine31.jpeg'
import valentine32 from './assets/valentine32.jpeg'
import valentine33 from './assets/valentine33.jpeg'
import valentine34 from './assets/valentine34.jpeg'
import valentine36 from './assets/valentine36.jpeg'
import valentine37 from './assets/valentine37.jpeg'
import valentine38 from './assets/valentine38.jpeg'
import valentine39 from './assets/valentine39.jpeg'


import './home.css'



const  CarouselWithMusic =()=>{
   const audioRef = useRef();
   const [index, setIndex] = useState(0);
   const [audioPlaying, setAudioPlaying] = useState(false);



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


    return (
      <div  className='background-container'>
        
      
        <Carousel  interval={3000} activeIndex={index} onSelect={handleSelect} wrap={true}>
          <Carousel.Item >
          <div className='image-container'>

            <img className="first" src={sky} alt="Slide 1" />
            <Carousel.Caption>
            <h3 className='val-col'>My valentine</h3>
            <p className='val-col'> ♥ To the only person I would share my snacks with.</p>

          </Carousel.Caption>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className='image-container'>

            <img className=" first" src={shower} alt="Slide 2" />
            <Carousel.Caption>
            <h3 className='val-col'>My valentine</h3>
            <p className='val-col'>♥ You are my happily ever after..</p>
          </Carousel.Caption>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className='image-container'>

            <img className="first" src={sleep} alt="Slide 3" />
            <Carousel.Caption>
            <h3 className='val-col'>My valentine</h3>
            <p className='val-col'>♥ Sleeping beauty</p>
          </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine3} alt="Slide 3" />
            <Carousel.Caption>
            <h3 className='val-col'>My valentine</h3>
            <p className='val-col'> ♥  We have a forever type of love.</p>
          </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine4} alt="Slide 3" />
            <Carousel.Caption>
            <h3 className='val-col'>My valentine</h3>
            <p className='val-col'>♥ Home is wherever I'm with you.</p>
          </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine5} alt="Slide 3" />
            <Carousel.Caption>
            <h3 className='val-col'>My valentine</h3>
            <p className='val-col'>♥ You make me laugh and smile every day. I love you!</p>
          </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine6} alt="Slide 3" />
            <Carousel.Caption>
            <h3 className='val-col'>My valentine</h3>
            <p className='val-col'>♥ That first sweet puppy love still has me panting for you.</p>
          </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine8} alt="Slide 3" />
            <Carousel.Caption>
            <h3 className='val-col'>My sweet valentine</h3>
            <p className='val-col'>♥ You are the only one I will ever love!.</p>
          </Carousel.Caption>
            </div>
          </Carousel.Item>  

          <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine9} alt="Slide 3" />
            <Carousel.Caption>
            {/* <h3 className='val-col'>My sweet valentine</h3> */}
            <p className='val-col'>♥ Our life together is a long, romantic love letter written in the ink of adventure and joy and stamped with approval by the hand of God..</p>
          </Carousel.Caption>
            </div>
          </Carousel.Item> 


 <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine11} alt="Slide 3" />
            <Carousel.Caption>
            {/* <h3 className='val-col'>My sweet valentine</h3> */}
            <p className='val-col'>wetin be this!!!. ♥ ♥ ♥ </p>
          </Carousel.Caption>
            </div>
          </Carousel.Item>  

          <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine12} alt="Slide 3" />
            <Carousel.Caption>
            <h3 className='val-col'>My sweet valentine</h3>
            <p className='val-col'>♥  You captivated me in courtship and as our lives merged into marriage, you completed my joy.</p>
          </Carousel.Caption>
            </div>
          </Carousel.Item> 

           <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine14} alt="Slide 3" />
            <Carousel.Caption>
            {/* <h3 className='val-col'>My sweet valentine</h3> */}
            <p className='val-col'> ♥ The first time I saw you, I knew we were meant to be. You are mine, Valentine, and I am forever yours.</p>
          </Carousel.Caption>
            </div>
          </Carousel.Item> 



          <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine15} alt="Slide 3" />
            <Carousel.Caption>
            {/* <h3 className='val-col'>My sweet valentine</h3> */}
            <p className='val-col'> ♥  I am as fascinated by your charm today as I was on the day we met.</p>
          </Carousel.Caption>
            </div>
          </Carousel.Item> 

          <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine16} alt="Slide 3" />
            <Carousel.Caption>
            {/* <h3 className='val-col'>My sweet valentine</h3> */}
            <p className='val-col'>♥ Loving you has always been easy, my precious Valentine.</p>
          </Carousel.Caption>
            </div>
          </Carousel.Item> 

          <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine18} alt="Slide 3" />
            <Carousel.Caption>
            {/* <h3 className='val-col'>My sweet valentine</h3> */}
            <p className='val-col'>♥ Valentine’s Day is a day to celebrate love, but because of you, sweet wife, I get to celebrate it every day.</p>
          </Carousel.Caption>
            </div>
          </Carousel.Item> 

          <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine19} alt="Slide 3" />
            <Carousel.Caption>
            {/* <h3 className='val-col'>My sweet valentine</h3> */}
            <p className='val-col'> ♥ My soul exists to be with yours. Happy Valentine’s Day!
</p>
          </Carousel.Caption>
            </div>
          </Carousel.Item> 

          <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine21} alt="Slide 3" />
            <Carousel.Caption>
            {/* <h3 className='val-col'>My sweet valentine</h3> */}
            <p className='val-col'>           ♥ You are the perfect Valentine, dear wife, and my heart is full when I think of you.

</p>
          </Carousel.Caption>
            </div>
          </Carousel.Item> 



          <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine23} alt="Slide 3" />
            <Carousel.Caption>
            {/* <h3 className='val-col'>My sweet valentine</h3> */}
            <p className='val-col'>        ♥ There is no chocolate in this box that is sweeter than our love.</p>
          </Carousel.Caption>
            </div>
          </Carousel.Item> 


          <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine24} alt="Slide 3" />
            <Carousel.Caption>
            {/* <h3 className='val-col'>My sweet valentine</h3> */}
            <p className='val-col'>      ♥ I am tickled pink to be your Valentine,
But these roses are red, and so is the wine.
Be my Valentine!</p>
          </Carousel.Caption>
            </div>
          </Carousel.Item> 

          <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine31} alt="Slide 3" />
            <Carousel.Caption>
            {/* <h3 className='val-col'>My sweet valentine</h3> */}
            <p className='val-col'>     ♥ My wife, my friend, my lover, the one,
Happy Valentine’s Day; you are second to none.</p>
          </Carousel.Caption>
            </div>
          </Carousel.Item> 


          <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine25} alt="Slide 3" />
            <Carousel.Caption>
            {/* <h3 className='val-col'>My sweet valentine</h3> */}
            <p className='val-col'>    ♥ Our unlimited love, sincere and strong,
Has turned life into an enduring love song.
Yours on Valentine’s Day and always.</p>
          </Carousel.Caption>
            </div>
          </Carousel.Item> 


          <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine2} alt="Slide 3" />
            <Carousel.Caption>
            {/* <h3 className='val-col'>My sweet valentine</h3> */}
            <p className='val-col'>   ♥ When we met, you were shy, but our love has grown bold.
And then you were mine to have and to hold.</p>
          </Carousel.Caption>
            </div>
          </Carousel.Item> 


          <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine39} alt="Slide 3" />
            <Carousel.Caption>
            {/* <h3 className='val-col'>My sweet valentine</h3> */}
            <p className='val-col'>   ♥ I know you by heart. I’ve memorized the very way your soul gazes at mine. Our love will never die.</p>
          </Carousel.Caption>
            </div>
          </Carousel.Item> 


          <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine36} alt="Slide 3" />
            <Carousel.Caption>
            {/* <h3 className='val-col'>My sweet valentine</h3> */}
            <p className='val-col'>   ♥ My beautiful wife, I love how you love us. Thank you for being the perfect wife </p>
          </Carousel.Caption>
            </div>
          </Carousel.Item> 




          <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine38} alt="Slide 3" />
            <Carousel.Caption>
            {/* <h3 className='val-col'>My sweet valentine</h3> */}
            <p className='val-col'>  ♥ I got a sweetheart of a deal when I married you, Valentine! </p>
          </Carousel.Caption>
            </div>
          </Carousel.Item> 


          <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine32} alt="Slide 3" />
            <Carousel.Caption>
            {/* <h3 className='val-col'>My sweet valentine</h3> */}
            <p className='val-col'>  ♥ You are the Queen of Hearts and everyone in this castle adores you. </p>
          </Carousel.Caption>
            </div>
          </Carousel.Item> 

          <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine34} alt="Slide 3" />
            <Carousel.Caption>
            {/* <h3 className='val-col'>My sweet valentine</h3> */}
            <p className='val-col'> ♥ I’m a blessed man because my Valentine is my wife. I love you. </p>
          </Carousel.Caption>
            </div>
          </Carousel.Item> 


          <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine33} alt="Slide 3" />
            <Carousel.Caption>
            {/* <h3 className='val-col'>My sweet valentine</h3> */}
            <p className='val-col'> ♥ As your husband, you define me, you sharpen and refine me. On Valentine’s Day, it’s time to wine me and dine me. </p>
          </Carousel.Caption>
            </div>
          </Carousel.Item> 


          <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine37} alt="Slide 3" />
            <Carousel.Caption>
            {/* <h3 className='val-col'>My sweet valentine</h3> */}
            <p className='val-col'> ♥ Loving you, my darling wife, keeps me young at heart.Happy Valentine’s Day sweetheart!</p>
          </Carousel.Caption>
            </div>
          </Carousel.Item> 


          <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine26} alt="Slide 3" />
            <Carousel.Caption>
            {/* <h3 className='val-col'>My sweet valentine</h3> */}
            <p className='val-col'>           Love makes life, and your love made my life. Happy Valentine, dear wife!
</p>
          </Carousel.Caption>
            </div>
          </Carousel.Item> 

          <Carousel.Item>
          <div className='image-container'>
            <img className="first" src={valentine27} alt="Slide 3" />
            <Carousel.Caption>
            {/* <h3 className='val-col'>My sweet valentine</h3> */}
            <p className='val-col'>                    I’m lost in your love and captured by your beauty. Happy Valentine’s Day, Sweetheart!

</p>
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
