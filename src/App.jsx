import { Route, Routes, Navigate } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import Bookmarked from "./pages/Bookmarked";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import { getAll } from "./../helpers/CRUD";
import PageTitle from "./components/PageTitle";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(() => {
    const currentUser = sessionStorage.getItem(`user`);
    return JSON.parse(currentUser) || null;
  });
  const [error, setError] = useState();

  const getUsers = async () => {
    try {
      const users = await getAll(`users`);

      setUsers(users);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <main>
        {error && <div>OOPS</div>}
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                <PageTitle title="Sign up" />
                <Signup setUser={setUser} users={users} />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <PageTitle title="Login" />
                <Login users={users} setUser={setUser} />
              </>
            }
          />
          <Route path="*" element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={
              <>
                <PageTitle title="Home" />
                <Home user={user} setUser={setUser} />
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <>
                <PageTitle title="Movies" />
                <Movies user={user} setUser={setUser} />
              </>
            }
          />
          <Route
            path="/tvseries"
            element={
              <>
                <PageTitle title="TV series" />
                <TvSeries user={user} setUser={setUser} />
              </>
            }
          />
          <Route
            path="/bookmarked"
            element={
              <>
                <PageTitle title="Bookmarks" />
                <Bookmarked user={user} setUser={setUser} />
              </>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
