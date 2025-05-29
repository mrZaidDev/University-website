import './About.css'
import about_img from '../../assets/young-certified.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
    return (  
        <div className="about container">
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon}  alt="" className='play-icon' onClick={() => {
                    setPlayState(true)
                }} />
            </div>
            <div className="about-right">
                <h3>About university</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam eum excepturi quibusdam veritatis! Illum vero quia ducimus inventore deleniti, accusantium laboriosam. Architecto blanditiis cumque id ea quibusdam. Obcaecati, asperiores magnam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis cum quaerat illo provident hic enim nulla omnis!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestias nulla molestiae amet quod debitis, inventore praesentium unde sapiente officia, accusamus odio, nemo magnam possimus!
                </p>
            </div>
        </div>
    );
}
 
export default About;