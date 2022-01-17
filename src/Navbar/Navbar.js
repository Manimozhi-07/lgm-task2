import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = ({onButtonSubmit}) => {

            return(
                <nav className='navbar'>
                    <h3 className="logo">Lets Grow More</h3>
                    <div className='nav-links'>
                        <Button variant="secondary" onClick={onButtonSubmit} >
                            Get Users
                        </Button>
                    </div>
                </nav>
            );
        }
export default Navbar;