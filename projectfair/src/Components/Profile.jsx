import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';

function Profile() {

// react-bootstrap(collapse)
    const [open, setOpen] = useState(false);
  
  
    return (
    <div className='card shadow p-5 mt-5 me-2 text-dark'>
        <div className='d-flex justify-content-between'>
            <h1>Profile</h1>
            <button onClick={() => setOpen(!open)} className='btn btn-outline-info'><i class="fa-solid fa-angle-down"></i></button>
        </div>

        <Collapse in={open}> 
            <div className='row justify-content-center mt-3 '>
                {/* upload profile picture */}
                <label>
                    <input type="file" style={{display:'none'}} />
                    <img style={{height:'200px',width:'200px'}} className='rounded circle' src="https://cdn.pixabay.com/animation/2022/12/01/17/03/17-03-11-60_512.gif" alt="" />
                </label>
                <div className='mt-3'>
                    <input type="text" className='form-control' placeholder='GitHub' />
                    <br />
                    <input type="text" className='form-control' placeholder='LinkedIn' />
                </div>
                <div className='mt-3 text-align-center d-grid'>
                    <button className='btn btn-success d-grid'>Update</button>
                </div>

            </div>
        </Collapse>

        
    </div>
  )
}

export default Profile