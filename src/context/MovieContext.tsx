import { ReactNode, createContext, useContext } from "react";

export interface Movie {
  rank: number;
  title: string;
  image: string;
  genre: string; // Assuming genre is a string, adjust if it's an array
  rating: number;
  id: number;
  year: number;
  description: string;
  cast: [];
  release: string;
  country: string;
  duration: string;
  production: string;
}
interface MoviesContextType {
  movies: Movie[] | null | undefined;
  isLoading: boolean;
  error: Error | null;
}
interface moviesProviderProps {
  value: MoviesContextType;
  children: ReactNode;
}

const MoviesContext = createContext<MoviesContextType>({
  movies: [],
  isLoading: false,
  error: null,
});

export const useMoviesContext = () => useContext(MoviesContext);

export const MoviesProvider: React.FC<moviesProviderProps> = ({
  value,
  children,
}) => <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>;
