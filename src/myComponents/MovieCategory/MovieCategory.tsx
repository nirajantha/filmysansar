
import MoviesCard from "../MoviesCard/MoviesCard";
import { Movie } from "../../context/MovieContext";
import "./moviesCategory.css"
import { EachElement } from "../../customHooks/EachElement";

interface categoryProps{
    heading:string;
    movie:Movie[] | null | undefined;
}
const MovieCategory:React.FC<categoryProps> = ({heading,movie})=> {

  return (
    <>
    <div className="flex flex-col gap-4">
        <h2 className="text-[2.5rem] text-[white] font-bold">{heading}</h2>
    <div className="moviesContainer">
        <EachElement of ={movie} render={(item,index)=>(
             <MoviesCard key={index} title={item.title} img={item.image} year={item.year} id={item.id} rating={item.rating}/>
        )}/>
</div>

    </div>
   

    </>
  )
}

export default MovieCategory