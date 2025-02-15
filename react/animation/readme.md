##  <font color="Green"> Reference: Animation using sheriyans school tutorial.
</font>

###  Framer short notes.
### Basic framer code
#### App.jsx
```
import React from 'react'
import {motion} from 'motion/react';

const App = () => {
  return (
    <div>
      <motion.div className='box'
      animate={{
        x:1200,
        rotate:360
      }}
      transition={{
        duration:3,
        delay:1
      }}
      ></motion.div>
      <motion.div className='circle'
      animate={{
        x:1100,
        scale:0.5
      }}
      transition={{
        duration:3,
        delay:10
      }}
      >
        
      </motion.div>
    </div>
    
  )
}

export default App
```

#### index.css
```
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: gilroy;
  color: #fff;
}
html,
body{
  height: 100%;
  width: 100%;;
}
body{
  background-color: #111;
}
.box{
  height: 200px;
  width: 200px;
  background-color: crimson;
  border: 2px solid white;
}
.circle
{
  height: 200px;
  width: 200px;
  background-color: lightblue;
  border: 2px solid white;
  border-radius: 50%;
  
}
```