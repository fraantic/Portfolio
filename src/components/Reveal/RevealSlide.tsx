

import React  from 'react'
import {motion }from 'framer-motion'

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  delay1: number;
}


const Reveal = ({ delay1, children, width = "fit-content"}: Props) => {
  return (
    <div  style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: {opacity: 0, y: -20},
          visible: {opacity: 1, y: 0},
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: delay1}}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Reveal