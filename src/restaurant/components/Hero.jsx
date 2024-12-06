import Reat from 'react';
import bgImage from '../imgs/img.png'

function Hero() {
    return(
        <div className="hero" style={{backgroundImage : `url(${bgImage}`}}>
            <h1>특별한 레스토랑을 예약하세요</h1>
            <p>다이닝테이블닷컴에서 독특한 레스토랑을 찾아보세요.</p>
        </div>
    );
}

export default Hero;