import React, {useState,useEffect} from 'react';
import {getPagesArray} from '../../../utils/pages.js'

function Pagination({page, changePage, totalPages, ...props}) {
  let pagesArray = getPagesArray(totalPages);  

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