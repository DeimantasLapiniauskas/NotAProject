import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import Bookmarked from "./pages/Bookmarked";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route path="*" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvseries" element={<TvSeries />} />
        <Route path="/bookmarked" element={<Bookmarked />} />
      </Routes>
    </>
  );
}

export default App;
