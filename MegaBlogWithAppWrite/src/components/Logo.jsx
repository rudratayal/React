import React from 'react'

function Logo({width = '100px'}) {
  return (
    <img
        src="/image.png"
        alt="Logo"
        style={{width: width,        
        height: width,       
        maxWidth: '100%',
        display: 'block',
        margin: '20px auto',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s ease-in-out',
        borderRadius: '50%',   
        objectFit: 'cover' }}
    />
  )
}

export default Logo