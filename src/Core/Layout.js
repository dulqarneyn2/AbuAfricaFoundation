import React from "react";
import Menu from "./Menu";
import Slider from './Slider';
import defaultSlides from '../Images/defaultSlides';


const Layout = ({
  title= '',
  className,
  children
}) => (
  <div >
       <Menu/>
    <div className="jumbotron"> 
      <h1>{title}</h1>
    </div>
   <div className={className}>{children}</div> 
     <Slider slides={defaultSlides} /> 
  </div>
);

export default Layout;
