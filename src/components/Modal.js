import React from 'react'
import '../css/Modal.css'

export default function Modal(props) {
  const { popUp, deletePost, deletedId} = props  
  return (
    <div className='overlay'>
        <div className='modal-card'>
            <h3>Are you sure you want to delete this post?</h3>
            <div className='choices'>
                <button className='no-btn' onClick={popUp}>NO</button>
                <button className='yes-btn' onClick={() => deletePost(deletedId)}>YES</button>
            </div> 
        </div>
    </div>
  )
}