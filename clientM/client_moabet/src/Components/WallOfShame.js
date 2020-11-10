import React from 'react';
import { Player } from 'video-react';
import './Css/WallOfShame.css'
import V1 from '../Assets/videos/V1.mp4'
import V2 from '../Assets/videos/V2.mp4'
import V3 from '../Assets/videos/V3.mp4'
import V4 from '../Assets/videos/V4.mp4'
import V5 from '../Assets/videos/V5.mp4'
import V6 from '../Assets/videos/V6.mp4'
import V7 from '../Assets/videos/V7.mp4'
import V8 from '../Assets/videos/V8.mp4'
import V9 from '../Assets/videos/V9.mp4'
import V10 from '../Assets/videos/V10.mp4'
import V11 from '../Assets/videos/V11.mp4'
import V12 from '../Assets/videos/V12.mp4'
import V13 from '../Assets/videos/V13.mp4'
import V14 from '../Assets/videos/V14.mp4'
import V15 from '../Assets/videos/V15.mp4'
import V16 from '../Assets/videos/V16.mp4'
import V17 from '../Assets/videos/V17.mp4'
import V18 from '../Assets/videos/V18.mp4'
import V19 from '../Assets/videos/V19.mp4'
import V20 from '../Assets/videos/V20.mp4'
import V21 from '../Assets/videos/V21.mp4'
import V22 from '../Assets/videos/V22.mp4'
import V23 from '../Assets/videos/V23.mp4'
import V24 from '../Assets/videos/V24.mp4'
import V25 from '../Assets/videos/V25.mp4'
import V26 from '../Assets/videos/V26.mp4'
import V27 from '../Assets/videos/V27.mp4'
import V28 from '../Assets/videos/V28.mp4'
import V29 from '../Assets/videos/V29.mp4'
import V30 from '../Assets/videos/V30.mp4'
import V31 from '../Assets/videos/V31.mp4'
import V32 from '../Assets/videos/V32.mp4'
import V33 from '../Assets/videos/V33.mp4'
import V34 from '../Assets/videos/V34.mp4'
import V35 from '../Assets/videos/V35.mp4'
import V36 from '../Assets/videos/V36.mp4'
import V37 from '../Assets/videos/V37.mp4'
import V38 from '../Assets/videos/V38.mp4'
import V39 from '../Assets/videos/V39.mp4'
import V40 from '../Assets/videos/V40.mp4'


var Videos = [V1, V2, V3, V4, V5, V6, V7, V8, V9, V10, V11, V12, V13, V14, V15, V16, V17, V8, V19, V20, V21, V22, V23, V24, V25, V26, V27, V28, V29, V30, V31, V32,V33,V34,V35,V36,V37,V38,V39,V40]

const WallOfShame = (props) => {
    return (
        <div className = "vid">
            <h1 style = {{color:'white'}}>Funny Videos:</h1>
            {Videos.map((vid) =>
                <video width="600" height="600" controls>
                    <source src={vid} type="video/mp4"  />
                </video>
            )
            }
        </div>
    );
};

export default WallOfShame;