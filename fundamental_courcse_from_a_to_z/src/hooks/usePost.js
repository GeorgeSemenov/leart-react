import {useMemo} from "react";
export const useSortedPosts = (posts,sort)=>{
  const sortedPosts   = useMemo(()=>{
    if(filter.sort){
      return [...posts].sort((a,b)=>a[sort].localeCompare(b[sort]) )
    }
    else{ return posts }
  },[filter.sort, posts]);
  return sortedPosts;
}