import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import testimonial_1 from "../../assets/testimonial-1.png";
import testimonial_2 from "../../assets/testimonial-2.png";
import testimonial_3 from "../../assets/testimonial-3.png";
import testimonial_4 from "../../assets/testimonial-4.png";
import { useEffect, useRef, useState } from "react";

const Testimonials = () => {
    const sliderRef = useRef(null)
    const [value,setValue] = useState(0)
    
    const moveForward = () => {
        if(value < 50 ){
            setValue(value => value + 25)
        }

    }
    const moveBackward = () => {
        if(value > 0 ){
            setValue(value => value - 25)
        }
    }

    useEffect(() => {
         sliderRef.current.style.transform = `translateX(-${value}%)`
    },[value])

  return (
    <div className="container-testimonial testimonials">
      <img src={next_icon} onClick={moveForward} alt="" className="next-btn" />
      <img src={back_icon} onClick={moveBackward} alt="" className="back-btn" />
      <div className="slider">
        <ul ref={sliderRef}>
        {/* Li tag */}
          <li>
            <div className="slide">
                <div className="user-info">
                    <img src={testimonial_1} alt="" />
                    <div>
                        <h3>William konda</h3>
                        <span>Edusity, USA</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ea beatae corporis, veniam at ipsam eius quod quibusdam soluta eos nisi quidem repudiandae nulla temporibus provident, unde cupiditate consequuntur eligendi?</p>
            </div>
          </li>
          {/* Li tag */}
          <li>
            <div className="slide">
                <div className="user-info">
                    <img src={testimonial_2} alt="" />
                    <div>
                        <h3>William konda</h3>
                        <span>Edusity, USA</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ea beatae corporis, veniam at ipsam eius quod quibusdam soluta eos nisi quidem repudiandae nulla temporibus provident, unde cupiditate consequuntur eligendi?</p>
            </div>
          </li>
          {/* Li tag */}
          <li>
            <div className="slide">
                <div className="user-info">
                    <img src={testimonial_3} alt="" />
                    <div>
                        <h3>William konda</h3>
                        <span>Edusity, USA</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ea beatae corporis, veniam at ipsam eius quod quibusdam soluta eos nisi quidem repudiandae nulla temporibus provident, unde cupiditate consequuntur eligendi?</p>
            </div>
          </li>
          {/* Li tag */}
          <li>
            <div className="slide">
                <div className="user-info">
                    <img src={testimonial_4} alt="" />
                    <div>
                        <h3>William konda</h3>
                        <span>Edusity, USA</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ea beatae corporis, veniam at ipsam eius quod quibusdam soluta eos nisi quidem repudiandae nulla temporibus provident, unde cupiditate consequuntur eligendi?</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
