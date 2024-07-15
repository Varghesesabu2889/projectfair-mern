import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Row,Col } from 'react-bootstrap'
import MyProjects from '../Components/MyProjects'
import Profile from '../Components/Profile'
function Dashboard() {

  const [username,setUserName] =useState("")

  useEffect( () =>{
    if(sessionStorage.getItem("existingUser")){
      setUserName(JSON.parse(sessionStorage.getItem('existingUser')).username)
    }
    },[])
  
  return (
   <>
   <Header insideDashboard />
   <Row style={{marginTop:"100px"}}>
   <Col sm={12} md={8}>

<h2>Welcome <span className='text-warning'>{username}</span></h2>

{/* My projects */}
<MyProjects/>


     </Col>
     <Col sm={12} md={4}>


{/*  Profile */}
<Profile/>


     </Col>
     </Row>
   </>
  )
}

export default Dashboard