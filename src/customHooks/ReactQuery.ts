import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Movie } from "../context/MovieContext";

const fetchFilms = async (): Promise<Movie[]> => {
  const res = await fetch("http://localhost:3000/movies");
  if (!res.ok) {
    throw new Error("network is not okay");
  } else {
    return res.json();
  }
};

const FilmDataQuery = () => {
  const {
    data: filmData,
    isLoading,
    error,
    refetch,
  }: UseQueryResult<Movie[], Error> = useQuery<Movie[], Error>({
    queryKey: ["films"],
    queryFn: fetchFilms,
    enabled: true,
  });
  return { filmData, isLoading, error, refetch };
};

export default FilmDataQuery;
