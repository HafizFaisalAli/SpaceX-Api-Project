import React from 'react'
import SpaceXLogo from '../assets/Media/SpaceX-Text-logo.png'

const Navbar = () => {


  // function myFunction() {
  //   var element = document.getElementById("bodya");
  //   element.dataset.bsTheme =
  //   element.dataset.bsTheme == "light" ? "dark": "light";
  //  }


  return (
    <>
    <div className="container-fluid bg-dark  navbar-shadow">
     <nav className='navbar navbar-dark justify-content-center'>
        <img className="navbar-image py-2" src={SpaceXLogo} alt="" />
        {/* <div class="form-check form-switch float-end"> 
      <input 
      class="form-check-input"
      type="checkbox"
      role="switch"
      id="FlexSwitchCheckChecked"
      onclick={myFunction()}
      />
    </div> */}
     </nav> 
    </div>
    </>
  )
}

export default Navbar
