import React, {useState,useEffect} from 'react';

function Pagination({page, cahngePage, totalPages, ...props}) {
  
  return(
    <div className="page__wrapper" {...props}>
    {
      pagesArray.map(
        p=><span 
          key = {p}
          onClick = {() =>{changePage(p)}}
          className={
          p == page
          ? "page page__current"
          : "page"
        }>{p}</span>
      )
    }
    </div>
  )
}

export default Pagination;    