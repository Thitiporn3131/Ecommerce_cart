import React from 'react'
import cart from '../img/shopping-bag.png'
import '../style/navbar.css'
import header from '../img/header1.jpg'

const Navbar = ({size, setShow}) => {
  return (
    <nav>
        <div className='nav_box'>
            <span className='my_shop' onClick={()=>setShow(true)}>Shinex</span>
            <div className='cart' onClick={()=>setShow(false)}>
                <span>
                    <img src={cart} alt='img'/>
                </span>
                <span>{size}</span>
            </div>
        </div>
        <div className='header'>
            <img className='pic1' src={header} alt='img'/>
            <p>Shine your energy </p>
            <hr></hr>
            <p>Be Yourself</p>
            <p></p>
        </div>
    </nav>
  )
}

export default Navbar
