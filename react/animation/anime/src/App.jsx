import React from 'react'
import {motion} from 'motion/react';

const App = () => {
  return (
    <div>
      <motion.img 
      animate={{
        x:[0,200]
      }}
      transition={{
        duration:3,
        delay:2
      }}
      whileHover={{
        scale:2
      }}
      src="https://www.svgrepo.com/show/530572/accelerate.svg"
      >
      
      </motion.img>
      
        
   
      
        
     
    </div>
    
  )
}

export default App