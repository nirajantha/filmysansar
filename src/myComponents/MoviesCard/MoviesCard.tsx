import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar,faPlay,faHeart } from "@fortawesome/free-solid-svg-icons"
import Button from "../Button/Button"
import "./moviesCard.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

interface filmProps{
title:string,
img:string,
rating:number,
year:number,
id:number
}
const MoviesCard:React.FC<filmProps> = ({title,img,rating,year,id})=> {
  const[fav,setfav] = useState<boolean>(false)
  const navigate = useNavigate()
  const watchNow = ()=>{
    alert("watch now")
  }   
  const addToFav = (e:React.MouseEvent)=>{
    e.stopPropagation();
     setfav(!fav);
  }
  const oneMovie =()=>{
    navigate(`/oneMovie/${id}`);
  }

  return (  
    
    <div className=" movieCard rounded w-[16rem]" onClick={oneMovie} >
        <div className="movieImg w-[100%]">
            <img className="rounded-tr rounded-tl w-full object-fill h-[15rem]"  src={img}/>
        </div>

        <div className="bg-slate-800 rounded-br rounded-bl flex flex-col justify-center items-start p-2 gap-2">
          <div className="relative flex justify-center items-center gap-2">
        <span className="text-[white]"><FontAwesomeIcon icon={faStar}/> {rating?rating:"N/A"}</span>
        <span className="text-[white]">{year}</span>
        <span className="favMoive" onClick={addToFav}><FontAwesomeIcon icon={faHeart} className={fav?'text-slate-400':'text-[white]'}/></span>
          </div>
            <div className="text-[white] text-[12px] overflow-hidden  text-ellipsis whitespace-nowrap font-bold w-[15rem]">
              {title}</div>
            <Button btnName="Watch Now" click={watchNow} icon={<FontAwesomeIcon icon={faPlay} />}/>
        </div>
    </div>
    
        
  )
}

export default MoviesCard