import React, { useState, useEffect } from 'react'
import { FaStar } from "react-icons/fa6";

const Stars = ({ rating, handleStarClickedValue }) => {
    const [glow, setGlow] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    })
    const [clicked, setClicked] = useState(false)

    useEffect(()=> {
        if(clicked) handleStarClickedValue(clicked)
    },[clicked])

    const glowCss = {
        fill: '#FFBF26'
    }

    const mouseIn = (index) => {
        // setClicked(false)
        if (rating == undefined) {
            if (!clicked) {
                let obj = { ...glow }
                for (let i = 1; i <= index; i++) {
                    obj[i] = true;
                }
                for (let i = index + 1; i <= 5; i++) {
                    obj[i] = false;
                }
                setGlow(obj)
            }
        }
    }

    const mouseLeave = () => {
        // setClicked(false)
        if (rating == undefined) {
            if (!clicked) {
                let obj = { ...glow }
                for (let i = 1; i <= 5; i++) {
                    obj[i] = false;
                }
                setGlow(obj)
            }
        }
    }

    useEffect(() => {
        // if (rating !== undefined) {
            let obj = { ...glow }
            for (let i = 1; i <= rating; i++) {
                obj[i] = true;
            }
            setGlow(obj)
        // }
    }, [rating])

    useEffect(() => {
        if (rating == undefined) {
            let obj = { ...glow }
            for (let i = 1; i <= clicked; i++) {
                obj[i] = true;
            }
            for (let i = clicked + 1; i <= 5; i++) {
                obj[i] = false;
            }
            setGlow(obj)
        }
    }, [clicked])

    return (
        <div className='Stars' onMouseLeave={() => mouseLeave()} style={{ width: 'fit-content' }}>{
            new Array(5).fill(1).map((item, index) => (
                <FaStar className='starSVG' key={index} onMouseOver={() => mouseIn(index + 1)} onClick={() => setClicked(index + 1)} style={glow[index + 1] ? glowCss : ''} />
            ))
        }</div>
    )
}

export default Stars