import React, {useState} from 'react';

function About({children,...props}) {
  
  return(
    <h1
      {...props}
    >
      Это приложение не гействует, но действует.
    </h1>
  )
}

export default About;