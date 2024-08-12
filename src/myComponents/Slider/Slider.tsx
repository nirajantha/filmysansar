
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Movie } from "../../context/MovieContext";
import "./slider.css"
import { useNavigate } from "react-router-dom";


interface SliderProps{
    films:Movie[] | null
}

const SimpleSlide:React.FC<SliderProps> = ({films})=> {

  const navigate = useNavigate()
 
    const goToMovie =(id:number)=>{
      navigate(`/oneMovie/${id}`); 
    }

        var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,

        };

  return (

    <Slider {...settings}>
        {

            
            films?.map((item,index)=>(
            <div className="slider-container" key={index} onClick={()=>{goToMovie(item?.id)}}>
                <img src={item.image} />
                <h3 className="text-[white]">{item.title}</h3>
              </div>

            )
        )
        }
       
    
    </Slider>
  );
}
  


export default SimpleSlide