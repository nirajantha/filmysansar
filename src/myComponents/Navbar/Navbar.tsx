import { Link } from "react-router-dom"
import Search from "../Search/Search"
import GenreMenu from "../Genre/GenreMenu"

import { useState } from "react"
import { useFetchMovies } from "../../customHooks/CustomHook"


type LinkType = {name:string,url?:string, dropdownMenuItems?:string[]}

interface navbarProps{
links:LinkType[];
brand:string;
}

export const Navbar:React.FC<navbarProps> = ({links,brand}) => {
  let {data,error,isLoading} = useFetchMovies();

 const genres = data?.map(item=>item.genre)

 const individualGenres = genres?.filter((item,index)=>{
   return genres.indexOf(item) === index
 })


  if(error) return <p>error</p>

  const[click, setClick] = useState<boolean>(false)
  
  const press = (name:string)=>{
    if(name === "Genres"){
      setClick(!click);
    }else{
      setClick(false)
    }
  }

  return (
    <>
    <nav className=" bg-slate-900 w-full flex justify-between items-center h-20 pl-20 pr-20">
        <div className=" items-center text-lg text-emerald-50">{brand}</div>
        <ul className="flex flex-row justify-between items-center gap-10">
            {
                links.map((link,index)=>
                  {
                    const dropdownMenuItems = link?.dropdownMenuItems ?? [];
                
                    return(
                      <li key={index} className="text-lg text-emerald-50 relative" >
                      <Link to={link?.url} onClick={()=>{press(link.name)}} >{link.name}</Link>
                          { dropdownMenuItems.length>0 && click &&  <GenreMenu genre={individualGenres} movies={data}/>}
                  </li>

                    )
                  })
            }
           
        </ul>
        
        <Search MovieData={data}/>


    </nav>
  
    </>

  )
}
