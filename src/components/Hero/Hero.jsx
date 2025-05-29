import dark_arrow from '../../assets/dark-arrow.png'
import './Hero.css'
const Hero = () => {
    return ( 
        <div className='hero container' >
            <div className="hero-text">
                <h1>We Ensure better education for a better world</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, itaque aut ab delectus ad obcaecati fugiat ipsum totam molestias eos laborum deleniti culpa? Tenetur, autem!</p>
                <button className='btn'>Explore more <img src={dark_arrow} alt="arrow" /></button>
            </div>
        </div>
     );
}
 
export default Hero;