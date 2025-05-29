import './VideoPlayer.css'
import UniversityBoys from '../../assets/university-boys.mp4'
import { useRef } from 'react';
const VideoPlayer = ({playState,setPlayState}) => {
    const videoDivRef = useRef(null)
    const handleDivClick = (e) => {
        setPlayState(false)
    }
    return ( <div onClick={handleDivClick} ref={videoDivRef} className={`video-player ${playState ? '' : 'hide'}`}>
        <video src={UniversityBoys} controls muted autoPlay></video>
    </div> );
}
 
export default VideoPlayer;