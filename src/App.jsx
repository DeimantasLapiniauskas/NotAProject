import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import Bookmarked from "./pages/Bookmarked";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import PageTitle from "./components/PageTitle";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/signup"
          element={
            <>
              <PageTitle title="Sign up" />
              <Signup />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <PageTitle title="Login" />
              <Login />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <PageTitle title="Home" />
              <Home />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <PageTitle title="Movies" />
              <Movies />
            </>
          }
        />
        <Route
          path="/tvseries"
          element={
            <>
              <PageTitle title="TV series" />
              <TvSeries />
            </>
          }
        />
        <Route
          path="/bookmarked"
          element={
            <>
              <PageTitle title="Bookmarks" /> 
              <Bookmarked />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
