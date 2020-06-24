import React from "react";
import PropTypes from "prop-types"
import '../App.css'

const Profile = props => {
  
    return (



<div class="infocardContainer">
  <div id="main">
  {props.children}
  </div>
  <div id="textbois">
    <h2>{props.fullName}</h2>
    <h4>{props.profession}</h4>
    <a href="mailto:limecicila@gmail.com">bouachirhamza@gmail.com</a>
    <div id="hotlinks">
      <a href="https://codepen.io/LIMESTA"><img id="codepenio" alt='...' src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png" target="_blank"></img>
      </a>
      <a href="https://codepen.io/LIMESTA">
        <img id="codepenio" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png" target="_blank" alt='...'></img>
      </a>
      <a href="https://codepen.io/LIMESTA">
        <img id="codepenio" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png" target="_blank" alt='...'></img>
      </a>
    </div>
  </div>
  {props.x(props.fullName)}
</div>
    


    )}
         
    
    
    
    
    
  

Profile.propTypes = {
    fullName: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string,
    x: PropTypes.func
  }

export default Profile; 



