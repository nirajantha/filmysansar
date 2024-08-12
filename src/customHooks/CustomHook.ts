import { useEffect, useState } from "react";
import { Movie } from "../context/MovieContext";

interface fetchError extends Error {
  message: string;
}
export function useFetchMovies() {
  const [data, setData] = useState<Movie[] | null | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<fetchError | null>(null);

  const url = "http://localhost:3000/movies";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok)
          throw new Error("Network response was not oaky") as fetchError;
        const result: Movie[] = await response.json();
        setData(result);
      } catch (error) {
        setError(error as fetchError);
        console.log("error", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return { data, error, isLoading };
}
