import React, { useEffect } from "react";
import { HeroSection } from "../../myComponents/HeroSection/HeroSection";
import MovieCategory from "../../myComponents/MovieCategory/MovieCategory";
// import { useFetchMovies } from "../../customHooks/CustomHook";
import filmDataQuery from "../../customHooks/ReactQuery";

const Home: React.FC = () => {
  // const { data, error, isLoading } = useFetchMovies();
  const { filmData, isLoading, refetch } = filmDataQuery();
  console.log("filmData>>", filmData);

  // if (error) return <p>error</p>;

  if (isLoading) return <p>Loading</p>;

  const latestMovies = filmData?.filter((items) => items.year >= 2020);

  const upcomingMovies = filmData?.filter((items) => items.year == null);

  return (
    <>
      <section className="bg-slate-600">
        <HeroSection />
        <div className="p-20">
          <MovieCategory
            heading="Top 10 IMDB Rating "
            movie={filmData?.slice(0, 10)}
          />
        </div>
        <div className="pl-20 pr-20">
          <MovieCategory heading="Trending" movie={latestMovies?.slice(0, 4)} />
        </div>
        <div className="p-20">
          <MovieCategory heading="Latest" movie={latestMovies} />
        </div>
        <div className="p-20">
          <MovieCategory heading="Upcoming" movie={upcomingMovies} />
        </div>
        <button onClick={() => refetch()}>ReactQuery fetching Data</button>
      </section>
    </>
  );
};

export default Home;
