'use client';

import React, {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from 'framer-motion'

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  delay2?: number;

}

const Reveal = ({ delay2, children, width = "fit-content"}: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  let finaldelay = 0.1
  if (delay2 === undefined) {
    finaldelay = 0.1
  } else { 
    finaldelay = 0.1 + delay2
  }
  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: {opacity: 0, y: 75},
          visible: {opacity: 1, y: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.4, delay: finaldelay}}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Reveal