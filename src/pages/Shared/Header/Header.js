import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

import './Header.css';

const Header = () => {

    const { user, handleLogOut } = useAuth();

    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                <Container>
                    <Navbar.Brand as={Link} to="/home"><img src="https://www.travelmate.com.bd/wp-content/uploads/2019/08/TravelMate-Logo-for-Website-01-1.png" style={{
                        height: "50px"
                    }} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

                        <Nav className="">
                            <NavLink to='/home' className='nav-item' activeStyle={activeStyle}>Home</NavLink>
                            <NavLink to='/about' className='nav-item' activeStyle={activeStyle}>About</NavLink>

                            {/* <NavDropdown title="About" id="collasible-nav-dropdown" className='nav-item' activeStyle={activeStyle}>
                                <NavDropdown.Item to='/about'>About  </NavDropdown.Item>
                                <NavDropdown.Item to='/about' >About  </NavDropdown.Item>
                                <NavDropdown.Item to='/about' >About  </NavDropdown.Item>

                            </NavDropdown> */}


                            {/* <NavLink to='/login' className='nav-item' activeStyle={activeStyle}>Log In</NavLink> */}

                            {
                                (user?.email) && <NavLink to='/myorders' className='nav-item' activeStyle={activeStyle}>MyOrders</NavLink>
                            }
                            {
                                (user?.email) && <NavLink to='/manageorders' className='nav-item' activeStyle={activeStyle}>ManageOrder</NavLink>
                            }
                            {
                                (user?.email) && <NavLink to='/addnew' className='nav-item' activeStyle={activeStyle}>AddNew</NavLink>
                            }
                            {/* {
                                (user?.email) && <NavLink to='/contractus' className='nav-item' activeStyle={activeStyle}>Contract</NavLink>
                            } */}


                            {
                                user?.email && <div className="d-flex justify-content-center align-items-center">
                                    <span className='text-white'> Hello {user.displayName}</span>
                                </div>
                            }
                            {
                                user?.email ? <button className='btn fw-bold text-white' onClick={handleLogOut}> log Out</button> :
                                    <NavLink to='/login' className='nav-item' activeStyle={activeStyle}>Log In</NavLink>
                            }
                            {
                                (!user?.email) && <NavLink to='/register' className='nav-item' activeStyle={activeStyle}>Register</NavLink>
                            }


                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </div >
    );
};

export default Header;