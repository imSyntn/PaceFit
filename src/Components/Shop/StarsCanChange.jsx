import React, { useState } from 'react'
import { FaStar } from "react-icons/fa6";

const StarsCanChange = () => {
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

    // console.log('gl',glow)
    // let obj = {...glow}
    // console.log(obj)
    // console.log('ob',obj)

    const mouseIn = (index) => {
        let obj = { ...glow }
        // console.log(obj)
        for (let i = 1; i <= index; i++) {
            obj[i] = true;
        }
        // if(index!==5) {
        for (let i = index + 1; i <= 5; i++) {
            obj[i] = false;
        }
        // }
        // console.log(obj)
        setGlow(obj)
    }
    const mouseLeave = () => {
        let obj = {...glow}
        for (let i = 1; i <= 5; i++) {
            obj[i]=false;
        }
        // console.log(obj)
        setGlow(obj)
    }

    return (
        <div className='Stars' onMouseLeave={()=> mouseLeave()} style={{width: 'fit-content'}}>{
            new Array(5).fill(1).map((item, index) => (
                <FaStar className='starSVG' key={index} onMouseOver={() => mouseIn(index + 1)} style={glow[index + 1] ? glowCss : ''} />
            ))
        }</div>
    )
}

export default StarsCanChange