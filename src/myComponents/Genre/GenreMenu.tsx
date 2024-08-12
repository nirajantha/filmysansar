
import { Movie } from "../../context/MovieContext";
import "./genre.css";
import { useNavigate } from "react-router-dom";

interface genreProps {
  genre: string[] | undefined;
  movies: Movie[] | undefined | null;
}
const GenreMenu: React.FC<genreProps> = ({ genre, movies }) => {
  const navigate = useNavigate()

  const genreMovies = (genre: string) => {
    const movie = movies?.filter((item) => item.genre === genre);
    navigate('/movies', { state: { data: movie,genre} });
   
  };

  return (
    <>
      <div className="menuitems bg-slate-800 w-[20rem] absolute z-10  left-[-120%]">
        <ul className="flex flex-wrap gap-6 items-center justify-center">
          {genre?.map((item, id) => (
            <li
              key={id}
              className="text-[white] w-[auto]"
              onClick={() => {
                genreMovies(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default GenreMenu;
