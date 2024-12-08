import React from 'react'
import { useNavigate } from 'react-router-dom'

function FaceVerify() {
    
    let navigate=useNavigate();

  return (

    <div>
            <a href="http://192.168.56.1:8080" className="my-link">
            Go to face Recognition 
            </a>
    </div>
  )
}

export default FaceVerify