import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./myComponents/Header/Header";
import Home from "./Pages/Home/Home";
import Films from "./Pages/Films/Films";
// import OneMovie from './myComponents/OneMovie/OneMovie'
import OneMovie from "./Pages/OneMovie/OneMovie";
// import CounterProvider from "./context/CounterContext";
// import Counter from "./myComponents/counter/Counter";
// import { useFetchMovies } from './customHooks/CustomHook'
// import Skeleton from 'react-loading-skeleton'

function App() {
  // const{data,error,isLoading} = useFetchMovies();
  // console.log("data>>>",data)
  // if(error) return<p>error</p>
  // if(isLoading)return<p>loading</p>

  return (
    <>
      <Router>
        <div className="myApp">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/genres" element={<div>Genres</div>}/> */}
            <Route path="/country" element={<div>Country</div>} />
            <Route path="/movies" element={<Films />} />
            <Route path="/oneMovie/:id" element={<OneMovie />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
