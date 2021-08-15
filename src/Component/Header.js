import {Link} from "react-router-dom";
import {Container, Nav, Navbar, NavbarBrand} from 'react-bootstrap';
import './Header.css';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";



export default function Header(){
    const[{basket,user}, dispatch] = useStateValue();

    const handleAuthentication = () =>{
        if(user){
            auth.signOut();
            dispatch({
                type: 'EMPTY_BASKET',
            })
        }
    }

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
                        {/* <Nav>
                        <Nav.Link as={Link} to="user/sign-in">Sign In</Nav.Link>   
                        <Nav.Link as={Link} to="user/register">Register</Nav.Link>                        
                        </Nav> */}
                      <Nav>
                        
                        <Nav.Link as={Link} onClick={handleAuthentication} to={!user && '/user/sign-in'}>
                                {user? 'Sign Out':'Sign In'}
                            </Nav.Link>       
                             
                            <Nav.Link as={Link} to={'/user/check-out'}>
                                <ShoppingCartIcon />
                                <span>{basket?.length}</span>
                            </Nav.Link>                         
                        </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>

    
    )
}