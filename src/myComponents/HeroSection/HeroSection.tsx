
import { useNavigate } from "react-router-dom";
import { useFetchMovies } from "../../customHooks/CustomHook"
import { EachElement } from "../../customHooks/EachElement";
import SimpleSlide from "../Slider/Slider"
import "./heroSection.css"

export const HeroSection:React.FC = () => {
  const navigate = useNavigate()

  const {data,error,isLoading} = useFetchMovies();

  if(error) return<p>error</p>
  if(isLoading) return<p>Loading...</p>

  const click = (id:number)=>{
 navigate(`/oneMovie/${id}`)
  }

  return (
    <>
    <div className="relative h-[100vh] flex justify-center items-center">
       <SimpleSlide films={data?.slice(10,14)||null}/>
<div className="flex flex-col items-center pt-2 gap-2">
        <EachElement of={data?.slice(0,4) || null} render={(item,index)=>(
          <div key={index} className="flex h-[20vh]" onClick={()=>{click(item.id) }}>
            <img src={item.image} className="object-contain"/>
            <h3 className="text-[white]">{item.title}</h3>
          </div>

        )}/>
</div>

        </div>
    </>
  )
}
