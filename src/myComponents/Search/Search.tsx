import React, { useEffect, useState } from "react";
import "./Search.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { useFetchMovies } from "../../customHooks/CustomHook";
import { Movie } from "../../context/MovieContext";
import { useNavigate } from "react-router-dom";

interface searchProps{
 MovieData?: Movie[] | null;
}
const Search: React.FC<searchProps> = ({MovieData}) => {
  const [query, setQuery] = useState<string>("");
  const [searchedData, setSearchData] = useState<Movie[]>();
  // const { data, error, isLoading } = useFetchMovies();
  const navigate = useNavigate()

  useEffect(() => {
    const mappedData = MovieData?.filter((item) => {
      if (item.title) {
        return item?.title?.toLowerCase().startsWith(query?.toLocaleLowerCase());
      } else {
        return false;
      }
    });
    setSearchData(mappedData);
  }, [query]);

  const goToMovie = (id:number)=>{
    navigate(`/oneMovie/${id}`)
    setQuery('')

  }

  return (
    <div className="searchDiv">
      <form className="searchForm">
        <input
          className="rounded-[8px]"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Search Your Favourite Movie"
        />
        {/* <button className="rounded-[8px] p-[10px] bg-slate-700 text-red-300 w-20 ">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button> */}
      </form>
      {
        query && <div className="flex absolute top-[6rem] shadow-black right-10 z-10 flex-col overflow-scroll h-[10rem] w-[40rem] bg-slate-600">
        {searchedData?.map((item:any,index:any)=>(
           <li onClick={()=>{goToMovie(item.id)}} key={index} className="flex gap-4 border-b-2 border-[#4d4b4b99]">
            <div className="w-[8rem] h-[8rem] mt-2">
              <img src={item.image}/>
           </div>
           <div>
            <h3 className="text-[white] text-lg font-bold">{item.title}</h3>
            <p className="text-[white]">{item.description}</p>
           </div>
          </li>
        )
  
        )
        }
  
        </div>
      }
     
    </div>
  );
};

export default Search;
