import { useState } from 'react'
import reactLogo from './assets/react.svg'
import "@fontsource/roboto"
import ListItem from './components/listItem'
import './App.css'
import './css/MainLayout.css'
import './css/Checkout.css'
import logo from './assets/shoppingbag.png'

function App() {
  return (
    <div className="App">
      <div className='flexContainer'>
        <div className='box'>
          <h1> NAV BAR WITH TITLE OF SITE </h1>
        </div>
        <div className='box'>
          <img src={logo} className="shoppingLogo" alt="TEST"></img>
          <h1 className='title'> My Cart </h1>
        </div>
        <div className='cartBox'>
          <div className='Checkout'>
            <div className='itemBox'>
              <ListItem imageSrc="øl.jpg"/>
            </div>
            <div className='checkoutBox'>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
