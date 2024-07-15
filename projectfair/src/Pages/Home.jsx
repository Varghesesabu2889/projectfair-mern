import React, { useEffect, useState } from 'react'
import{Row,Col} from 'react-bootstrap'
import titleimage from '../assets/mernproject.gif'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'
import { homeProjectAPI } from '../Components/services/allAPI'
function Home() {
  const  [loggedin,setLoggedin]=useState(false)
const [homeProjects,setHomeProjects]=useState([])

const getHomeProjects = async ()=>{
  const result = await homeProjectAPI()
  if(result.status===200){
    setHomeProjects(result.data)
  }else{
    console.log(result);
    console.log(result.response);
  }
}
// console.log(homeProjects);
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setLoggedin(true);
    }else{
      setLoggedin(false)
    }
    //apicall
    getHomeProjects();
    },[])
  return (
    <>
  <div className="container-fluid rounded" style={{backgroundColor:""}}>
  <Row className='align-items-center p-5'>
                    <Col sm={12} md={6}>
                        <h1 className='fw-bolder text-dark'><i class="fa-solid fa-list-check"></i>Project-Fair</h1>
                        <p className='align-items-justify text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi error asperiores, sunt fugiat consectetur totam voluptas tempore exercitationem! Recusandae qui neque, incidunt quod molestiae amet fugit molestias nihil eligendi temporibus.</p>
                         {loggedin?
                          <Link to={'/dashboard'} className='btn btn-warning border border-rounded'>Manage to Explore <i class="fa-solid fa-arrow-right"></i></Link>:
                          <Link to={'/login'} className='btn btn-warning border border-rounded'>Start to Explore <i class="fa-solid fa-arrow-right"></i></Link>

                         }

                    </Col>

                    <Col sm={12} md={6}>
                    <img width={'500px'} src={titleimage} alt="" />
                    </Col>


                </Row>
  </div>
  {/* all projects */}
  <div className="all-projects mt-4">
    <h1 className='fw-bolder text-center'>Explore Your Projects</h1>
<marquee scrollAmount={25}>
    <Row>
      {
        homeProjects?.length>0?homeProjects.map(project=>(
          <Col sm={12} md={6} lg={3} >
        <ProjectCard project={project}/>
      </Col>
        )):null
         }
    </Row>
    </marquee>
    <div className="text-center"><Link to={"./projects"}>View More Projects</Link></div>
  </div>
  </>
  )
}

export default Home