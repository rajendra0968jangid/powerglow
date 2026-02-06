import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import myScreenshot from '../Images/Gemini_Generated_Image_udn7d5udn7d5udn7.png';

export default function Header() {
  return (
    <div>
    <header  className="header"> 
      
        <nav>
          <div className='navbar' style={{margin:15,padding:4}} >
                <div className='imagebar' style={{marginLeft:20}}>
                <img src={myScreenshot} alt="Description of screenshot" className='navimage'/>
                <h4  style={{marginLeft:10,display:'flex',alignItems:'center'}}>TouristIQ</h4>
                </div>
            <ul>
                <li> <Link to={'/'} style={{ textDecoration: 'none' }}>Home</Link></li> 
                <li><Link to={'/PlaceDetails'} style={{ textDecoration: 'none' }}>Place-Details</Link></li>
                <li><Link to={'/LiveMap'} style={{ textDecoration: 'none' }}>Live-map</Link></li>
                <li><Link to={'/Footfall'} style={{ textDecoration: 'none' }}>Live-Crowd</Link></li>
                <li><Link to={'/About'} style={{ textDecoration: 'none' }}>About-us</Link></li>

            </ul>
            </div>
        </nav>
    </header>       
    </div>
  )
}
