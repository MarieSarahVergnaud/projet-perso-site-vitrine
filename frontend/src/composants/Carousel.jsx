import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
import image5 from "../assets/image5.jpg"
import image6 from "../assets/image6.jpg"
import image7 from "../assets/image7.jpg"
import image8 from "../assets/image8.jpg"
import image9 from "../assets/image9.jpg"
import image10 from "../assets/image10.jpg"
import image11 from "../assets/image11.jpg"
import image12 from "../assets/image12.jpg"
import image13 from "../assets/image13.jpg"
import image14 from "../assets/image14.jpg"





import buttonleft from "../assets/left-arrow.png"
import buttonright from "../assets/right-arrow.png"


import { useState } from "react";

function Carousel() {
    const images = [image1, image2, image3, image4, image5,
        image6, image7, image8, image9, image10, image11, image12, image13, image14
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const handleNext = () => {
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
   
   


return(
    <div className="carousel">
        
        <img src={buttonleft} className="button-left" onClick={handlePrevious}/>
        <div className="carousel-card">
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`}/>
        </div>
        <img src={buttonright} className="button-right"onClick={handleNext}/>
    </div>

)
}
export default Carousel;