import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss';

const Header = (props)=>{
    return (
        <header>
             <div className='navBar'>
                <nav>
               
                    <p>
                        <Link to="/">Home</Link>
                    </p>
                    <p>
                        <Link to="/History">History</Link>
                    </p>
                    <p>
                        {/* <a href="/contact-us">Contact us</a> */}
                        <Link to="/Help">Help</Link>
                    </p>
                
                </nav>
               </div>
               <div>
            <h1>RESTy</h1>
            </div>
           
        </header>
    )
}

export default Header;

