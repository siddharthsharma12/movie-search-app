import React from 'react';
import "./Header.css";


const Header = () => {
    return (
    <>
     <div className="hed">
 <span onClick = {() => window.scroll(0,0) } className = "header"> The HollyWood</span>
 </div>
    </>
    )
}

export default Header
