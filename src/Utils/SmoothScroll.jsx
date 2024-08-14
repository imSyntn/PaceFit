import React from 'react'
import { ReactLenis } from '@studio-freight/react-lenis'

const SmoothScroll = ({children}) => {
    const lenisOptions = {
        // lerp: 0.1,
        duration: 1,
        smoothTouch: false,
        smooth: true,
        // infinite: true,
    };
    return (
  <ReactLenis root options={lenisOptions}>
    {children}
  </ReactLenis>
    )
}

export default SmoothScroll;