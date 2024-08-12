import { useParams } from "react-router-dom"
import Button from "../../myComponents/Button/Button"
import MovieCategory from "../../myComponents/MovieCategory/MovieCategory"
import "./oneMovie.css"
import { useFetchMovies } from "../../customHooks/CustomHook"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar} from "@fortawesome/free-solid-svg-icons"
function OneMovie() {
  const id = useParams();
  const ID = id.id
  const {data,error,isLoading} = useFetchMovies()

  if(error) return<p>error</p>
  if(isLoading) return<p>Loading...</p>

  const filteredData = data?.filter(item=>item.id== parseInt(ID))

  function watch (){
    window.location.href = 'https://sflix.to/watch-movie/free-under-paris-hd-109780.10502017'
  }
  return (
    <>
    <section className="flex flex-col bg-slate-800">
        <div className="relative flex justify-center items-center p-[2rem] w-full bg-slate-700">
            <img src={filteredData[0]?.image} className="h-[20rem]"/>
            <div className="movieContainer flex gap-[10rem]">

              <div className="flex flex-col ml-10 gap-8">
                <h1 className="text-[48px] text-white">{filteredData[0]?.title}</h1>
                <div className="flex gap-8">
              <span className="text-[white]">Rating: <FontAwesomeIcon icon={faStar}/> {filteredData[0]?.rating?filteredData[0]?.rating:"N/A"}</span>
              <span className="text-[white]">Year: {filteredData[0]?.year}</span>
                </div>
                <p className="text-white text-[14px]">OverView:<br/> {filteredData[0].description}</p>
                <div className="flex gap-[10rem] w-[full]">
                  <div className="">
                    <p className="text-[white]"> Genre: {filteredData[0]?.genre}</p>
                    <span className="flex gap-2 text-[white]">Casts: {filteredData[0]?.cast?.map((item,id)=>(
                      <p key={id} className="text-[white]">{item}</p>)
                    )}</span>
                    <p className="text-[white]">Released: {filteredData[0]?.release}</p>
                  </div>
                  <div className="">
                  <p className="text-[white]">Duration: {filteredData[0]?.duration}</p>
                    <p className="text-[white]">Country: {filteredData[0]?.country}</p>
                    <p className="text-[white]">Production: {filteredData[0]?.production}</p>
          
                  </div>
                </div>
                <div className="w-[10rem]">
              <Button btnName="watch Now" click={watch}/>
                </div>
              </div>


            </div>
        </div>
        <div className="flex items-center justify-center">
        <MovieCategory heading="You may also know" movie={data}/>
        </div>

    </section>
    </>
  )
}

export default OneMovie