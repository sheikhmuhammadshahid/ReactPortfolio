import React from 'react'
import '../Styles/NavigationBar.css';
const NavigationComponent = () => {
    return (
        <div className='navbar sticky-top'>
            <ul className="snip1143 ">
                <li className="current"><a href="#" data-hover="Home">Home</a></li>
                <li><a href="#" data-hover="About Us">About Us</a></li>
                <li><a href="#" data-hover="Blog">Blog</a></li>
                <li><a href="#" data-hover="Services">Services</a></li>
                <li><a href="#" data-hover="Products">Products</a></li>
                <li><a href="#" data-hover="Contact">Contact</a></li>
            </ul>
        </div>
    )
}
export default NavigationComponent;