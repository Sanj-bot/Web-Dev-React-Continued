

import './App.css'
import ProductList from './components/ProductList'
import {useLogin} from "./hooks/useLogin";
function App() {
  // const [count, setCount] = useState(0)
  const {isLoggedIn,handleLogIn,handleLogOut}=useLogin();
  
  return (
    <>
     <button onClick={isLoggedIn?handleLogOut:handleLogIn}>{isLoggedIn?'Log out':'Log in'}</button>
     <ProductList/>
   
    </>
  )
}

export default App

