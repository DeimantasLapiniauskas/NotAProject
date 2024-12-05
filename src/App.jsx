
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import Bookmarked from "./pages/Bookmarked";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvseries" element={<TvSeries />} />
        <Route path="/bookmarked" element={<Bookmarked />} />
      </Routes>
    </>
  );
}

export default App;
