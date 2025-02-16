
import React from 'react'
import {motion} from 'motion/react';
export function App() {
  

  return (
    <>
    <motion.div className="box"
    drag
    whileDrag={{
      scale:0.8
    }}
    dragConstraints={{
      left:0,
      top:0,
      right:500,
      bottom:500
    }}
    dragDirectionLock='true'
    >

      a box that moves!!

    </motion.div>
    </>
   
  )
}
