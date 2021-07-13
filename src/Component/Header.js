import {Link} from "react-router-dom";
import {Container, Nav, Navbar, NavbarBrand} from 'react-bootstrap';
import './Header.css';


export default function Header(){


    return (             
            // to use spacing from boothstrap my-5
            <div className="header-container"> 
                <Container className="pg-max-width">
                    <Navbar variant="dark">
                        <NavbarBrand as={Link} to="/">VUDU</NavbarBrand>
                        <Nav >
                            <Nav.Link as={Link} to="/product/movie-list">Movies</Nav.Link>
                            <Nav.Link as={Link} to="/product/tv-list">TV</Nav.Link>                              
                        </Nav>
                        <Navbar.Toggle/>

                        <Navbar.Collapse className="justify-content-end">
                        <Nav>
                        <Nav.Link as={Link} to="user/sign-in">Sign In</Nav.Link>   
                        <Nav.Link as={Link} to="user/register">Register</Nav.Link>                        
                        </Nav>
                      
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>

    
    )
}