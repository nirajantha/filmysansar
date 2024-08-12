import React from "react";
import { MoviesProvider, useMoviesContext } from "./MovieContext";

const MoviesProviderWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { movies, error, isLoading } = useMoviesContext();

  return (
    <MoviesProvider value={{ movies: movies, isLoading, error }}>
      {children}
    </MoviesProvider>
  );
};

export default MoviesProviderWrapper;
