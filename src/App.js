import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import './index.css'
import { Route,Routes } from 'react-router-dom';
import Products from './shop/Products'
import Cart from './shop/Cart';
import UserDetails from './components/UserDetails'


const App = () => {
  return (
  <>

    <div className='app'>
      {/* <h1>redux toolkit</h1> */}
      {/* <UserDetails/> */}
      {/* <DeleteUser/> */}

      <Routes>
      
        <Route path={'/'} element={<Products/>}/>
        <Route path={'/cart'} element={<Cart/>}/>
        <Route path={'/user'} element={<UserDetails/>}/>


      </Routes>
      

    </div>
  </>
  )
}

export default App
