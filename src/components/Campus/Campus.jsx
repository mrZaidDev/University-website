import './Campus.css'
import team1 from '../../assets/num1.jpg'
import team5 from '../../assets/num2.jpg'
import team3 from '../../assets/num3.jpg'
import team4 from '../../assets/teamwork-5.png'
import white_arrow from '../../assets/white-arrow.png'
const Campus = () => {
    return ( 
        <div className='campus container' >
            <div className="gallery">
                <img src={team1} alt="" />
                <img src={team5} alt="" />
                <img src={team3} alt="" />
                <img src={team4} alt="" />
            </div>
            <button className='btn dark-btn'>See more here <img src={white_arrow} alt="arrow" /></button>
        </div>
     );
}
 
export default Campus;