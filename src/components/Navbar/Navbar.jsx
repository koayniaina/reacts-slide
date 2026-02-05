import { GraduationCap, Menu } from "lucide-react";
// import React from "react";
import './Navbar.css'
import { useEffect, useState } from "react";

export default function Navbar() {

  const [open , setOpen] =  useState(false)
  const [sticky , setSticky] = useState(false)

  useEffect(() =>{
      window.addEventListener('scroll'  , ()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
  } , [])



  const toggleMenu = () =>{
    setOpen(!open)
  } 
  return (
    <>
      <header  className={`header ${sticky ? "darkNav" : ""}`}>
        <div className="logo">
          <GraduationCap size={30}  />
          <span>Edusity</span>
        </div>
            <ul className={open ? "navLink active" : "navLink"}>
          <li>Home</li>
          <li>Program</li>
          <li>About us</li>
          <li>Campus</li>
          <li>Testimonials</li>
           <li><button className="button">Contact Us</button></li>
        </ul>
        <div className="iconMenu" onClick={toggleMenu}>
           <Menu />
        </div>
      </header>
    </>
  );
}
