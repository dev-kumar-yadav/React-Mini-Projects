import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div id='footer'>
        <div className="footertop">
            <div className="box">
                <span id='contact1'>Contact Us</span>
                <span>+910000000000</span>
                <span>abc1234@gmail.com</span>
                <span>Address,city/India</span>
            </div>
            <div className="box">
                 <span id='services'>Our Services</span>
                <span>Home</span>
                <span>Add Listing</span>
                <span>Rent</span>
            </div>
            <div className="box">
                 <span id='quick'>Quick Link</span>
                <span>Knowledge Base</span>
                <span>FAQ</span>
                <span>Contact</span>
            </div>
            <div className="box">
                 <span id='logo'>Private Property Rental</span>
                <Link to='/Contact'><button>Contact us</button></Link>
            </div>
        </div>
        <div className="footerbottom">
            <span>Privacy Policy | |</span>
            <span>Use of Terms</span>
        </div>
    </div>
  )
}

export default Footer