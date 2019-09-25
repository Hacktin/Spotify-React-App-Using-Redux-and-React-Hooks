

import React from 'react'
import {Navbar,Container,Nav,NavItem,NavbarBrand,NavbarToggler} from 'reactstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMusic} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

function Navi(){
    return(
        <div>
        <Container fluid >
        <Navbar>
           <NavbarBrand>
            <FontAwesomeIcon icon={faMusic} color="green" size="md"/> 
            SpotifyJS Generator
           </NavbarBrand>
           <NavbarToggler aria-controls="basic-navbar-nav" />
        
           <Nav className="ml-auto" navbar>
               <NavItem>
                   <Link to="/">Home</Link>
               </NavItem>
              <NavItem>
                <Link to="/artist">Artist</Link>
              </NavItem>
              <NavItem>
               <Link to="/playlist">PlayList</Link>
              </NavItem>
           </Nav>
                   
        </Navbar>
        </Container>
    </div>
    )
}

export default React.memo(Navi)