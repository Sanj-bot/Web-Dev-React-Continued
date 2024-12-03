import { useState } from 'react'

import './App.css'
import ProductList from './components/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <button>Login</button>
     <ProductList/>
   
    </>
  )
}

export default App
