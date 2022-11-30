import React from 'react';
import cl from './MyModal.module.css'

function MyModal({children, visible, setVisible, ...props}) {
  const rootClasses = [cl.myModal]
  if(visible){rootClasses.push(cl.active)}
  return(
    <div
      className = {rootClasses.join(' ')}
      onClick = {()=>setVisible(false)}
      {...props}
    >
      <div
        className= {cl.myModalContent}
        onClick = {(e)=>e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default MyModal;