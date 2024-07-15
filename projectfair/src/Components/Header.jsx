import React, { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Link,useNavigate } from 'react-router-dom';
import {Container  } from 'react-bootstrap';
import { tokenAuthorizationContext } from '../context/TokenAuth';
function Header({insideDashboard}) {
  const navigate = useNavigate()
  const {isAuthorized,setIsAuthorized}=useContext(tokenAuthorizationContext)
  const handleLogout = () =>{ 
    //remove all details from session storage
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setIsAuthorized(false);
//navigate to landing page
navigate("/");
  }
  return (
    <div>
      <Navbar className=" position-fixed top-0 w-100" style={{backgroundColor:"blue"}}>
        <Container>
          <Navbar.Brand>
          <Link to={"/"} style={{textDecoration:"none",color:"black", fontSize:"30px"}}><i class="fa-solid fa-list-check me-2"></i>
            Project Fair</Link>
          </Navbar.Brand>
          {
          insideDashboard &&
          <button className="btn align-items-right border" onClick={handleLogout}>Logout</button>

          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header