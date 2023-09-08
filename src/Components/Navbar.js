import React from 'react';
import './Navbar.css'; 
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const {loginWithRedirect}=useAuth0();

  function DM(){
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    const body = document.body;
    
    darkModeSwitch.addEventListener('change', function() {
      if (darkModeSwitch.checked) {
        body.classList.add('dark-mode');
      } else {
        body.classList.remove('dark-mode');
      }
    });
    
    
  }



  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <span>Reminder App</span>
      </div>
      <ul className="navbar__links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>

              <h6 className='Drk'>Dark Mode</h6> 
        </li>
        <li>
              <label className="switch">
                <input type="checkbox" id="darkModeSwitch" onChange={DM}  data-hover="Dark"/>
                  <span className="slider round"></span>
              </label>
        {/* </div> */}
        </li>
        <li>
          <button className="navbar__add-button" onClick={()=>loginWithRedirect()}>Log In</button>

        </li>
      </ul>
            
           
      
    </nav>
  );
};

export default Navbar;
