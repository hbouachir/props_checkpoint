import React from 'react';
import Profile from "./profile/Profile"
import './App.css';

function App() {

  const handleName=e=>{
    
    alert(e);}

  return (
    <div className="App">
      <Profile x={y=>handleName(y)} fullName="hamza"  profession="engineer" bio="kncqsinis ojcsi " >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" alt="hamza"/>
        </Profile>
        
    </div>
  );
}

export default App;
