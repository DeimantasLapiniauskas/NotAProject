import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import Bookmarked from "./pages/Bookmarked";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import { getAll } from "./../helpers/CRUD";

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
      <Nav />
      <main>
        {error && <div>OOPS</div>}
        <Routes>
          <Route
            path="/signup"
            element={<Signup setUser={setUser} users={users} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Home user={user} setUser={setUser} />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvseries" element={<TvSeries />} />
          <Route path="/bookmarked" element={<Bookmarked />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
