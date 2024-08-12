import React from 'react'
import { useFetchMovies } from '../../customHooks/CustomHook'
import MovieCategory from '../../myComponents/MovieCategory/MovieCategory'
import { useLocation } from 'react-router-dom'




const Films:React.FC = () => {
  const{data,error,isLoading} = useFetchMovies()
  const location = useLocation();
  console.log("location",location)
  const receivedData = location.state?.data;
  const receivedGenre = location.state?.genre;


  if(error) return<p>error</p>
  if(isLoading) return<p>Loadign</p>
 
  return (
    <>
    <div className='flex bg-red-400 justify-center items-center p-0 m-0 '>
      
     
          <MovieCategory heading={receivedGenre?receivedGenre:"All Movies "} movie={receivedData?receivedData:data}/>

    </div>
    </>
  )
}

export default Films
