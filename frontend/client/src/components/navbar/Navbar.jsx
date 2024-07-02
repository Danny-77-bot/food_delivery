import React, { useState } from 'react'
import './navbar.css';
export default function Navbar() {
    const [menu,setMenu]=useState("home")
  return (
    <div className='navbar'>
     <img src=""/>
     <ul className='navbar-menu'>
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>
            home
        </li>
        <li onClick={()=>{setMenu("menu")}} className={menu==="menu"?"active":""}>
            menu
        </li>
        <li onClick={()=>{setMenu("mobile-app")}}  className={menu==="mobile-app"?"active":""}>
            mobile-app
        </li>
        <li onClick={()=>setMenu("contact-us")}  className={menu==="contact-us"?"active":""}>
            contact-Us
        </li>
     </ul>
     <div className='navbar-right' >
     <img src="" alt=""/>
     <div className='navbar-search-icon'>
      <img src=""/>
      <div className='dot'></div>
      <button>Sign In</button>
     </div>
     <div>

     </div>
     </div>
    </div>
  )
}
