import React from 'react';
import cl from './Loader.module.css'

function Loader({children,...props}) {
  
  return(
    <div
      {...props}
      className = {cl.loader}
    >
      {children}
    </div>
  )
}

export default Loader;