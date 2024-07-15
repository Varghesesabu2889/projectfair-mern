import React, { useState } from 'react'
import projectimg from '../assets/pro.png'
import project from '../assets/reactpro.jpg'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import {Row,Col} from 'react-bootstrap'
import { BASE_URL } from './services/baseurl';

function ProjectCard({project}) {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
     {project && <Card style={{ width: '18rem' }} className='mt-3 mb-3'>
    <Card.Img  src={project?`${BASE_URL}/uploads/${project?.projectImage}`:projectimg } onClick={handleShow} />
    <Card.Body>
      <Card.Title>{project?.title}</Card.Title>
      </Card.Body>     
  </Card> 
}
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{project?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<Row>
  <Col md={6}>
    <img src={project?`${BASE_URL}/uploads/${project?.projectImage}`:projectimg } alt="project img" style={{width:'250px', height:'200px'}} className='img-fluid'/>
  </Col>
  <Col md={6}>
    <h2>{project?.title}</h2>
<p>Project Overview:{project?.overview} </p>
   <p>Languages Used: <span className='fw-bolder'>{project?.languages}</span></p>
  </Col>
</Row> 
<div>
  <a href={project?.github} target='_blank' className='me-2 btn text-dark' rel="noreferrer"><i class="fa-brands fa-github fa-2x"></i></a>
  <a href={project?.website} target='_blank' className='me-2 btn text-dark' rel="noreferrer"><i class="fa-solid fa-link"></i></a>

</div>


 

        </Modal.Body>
       
      </Modal>





















    </>
  )
}

export default ProjectCard