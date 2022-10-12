import React, {useState,useMemo} from 'react';
import MyInput from './UI/input/MyInput.jsx'
import MySelect from './UI/select/MySelect.jsx'

function PostFilter({filter,setFilter, ...props}) {
  
  return(
    <div
      {...props}
    >
      <MyInput
        placeholder={"Поиск..."}
        value = {filter.query}
        onChange = {(e)=>setFilter({...filter,query:e.target.value})}
      />
      <MySelect
        value = {filter.sort}
        onChange = {sortPosts}
        defaultValue = "Сортировка"
        options = {[
          {value:"title", name:"По заголовку"},
          {value:"body", name:"По описанию"}
        ]}
      />
    </div>
  )
}

export default PostFilter;