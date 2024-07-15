import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import ProjectCard from '../Components/ProjectCard'
import{Row,Col} from 'react-bootstrap'
import { allProjectAPI } from '../Components/services/allAPI'
// import { allProjects } from '../../../pfserver/Controller/projectController'
function Projects() {

const [searchKey,setSearchKey] = useState("")

//  const [projects, setProjects] = useState([])

const [allProjects,setAllProjects]=useState([])

const getAllProjects = async  () => {
  if(sessionStorage.getItem('token')){
    const token = sessionStorage.getItem('token')
    const reqHeader = { "Content-Type":"application/json",
      "Authorization" : `Bearer ${token}`}
const result  = await allProjectAPI(searchKey,reqHeader)
if (result.status === 200){
  setAllProjects(result.data);
}else{
console.log(result);
  }
}
}

useEffect( ()=>{
  getAllProjects();
} ,[searchKey])

  return (
    <>
    <Header/>
    <div style={{marginTop:"100px"}} className='projects'>
<h1 className="text-center mb-5">All Projects</h1>
<div className="d-flex justify-content-center align-items-center w-100">
  <div className="d-flex border w-50 rounded mb-3">
    <input type="text" className="form-control" placeholder='Search Project by Technologies'
     onChange={e=>setSearchKey(e.target.value)}/>
    <i style={{marginLeft:"-50px"}} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
  </div>
  
</div>
<Row>
  {allProjects?.length>0?allProjects?.map(project=>(
    <Col className='d-flex justify-content-center'
     sm={12} md={6} lg={4}>
 <ProjectCard project={project} />
     </Col>
  )): <p className='text-danger' fs-4 fw-bolder text-center>
    Please Login
  </p>
}
</Row>
      
      
    </div>
    </>
  )
}

export default Projects