import {useState} from "react";
export const useFetching = (callback)=>{
  const [isLoading,setIsLoading] = useState(false)
  const [error,setError] = useState('')

  const fetching = async (...args)=>{
    try{
      setIsLoading(true);
      await callback(...args);//await нужен, т.к. чаще всего колбэк будет асинхронной функцией
    } catch(e){
      setError(e.message);
    } finally{
      setIsLoading(false)
    }
  }

  return [fetching, isLoading, error]
}