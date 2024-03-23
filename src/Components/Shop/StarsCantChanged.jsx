import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6";

const StarsCantChanged = ({rating }) => {
    const [glow, setGlow] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    })
    const glowCss = {
        fill: '#FFBF26'
    }

    useEffect(()=>{
        let obj = {...glow}
        for(let i = 1; i <= rating; i++){
            obj[i]= true;
        }
        setGlow(obj)
    },[rating])

    return (
        <div className='Stars'>{
            new Array(5).fill(1).map((item, index) => (
                <FaStar className='starSVG' key={index} style={glow[index + 1] ? glowCss : ''} />
            ))
        }</div>
    )
}

export default StarsCantChanged