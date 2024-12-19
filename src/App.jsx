import { Route, Routes, Navigate } from "react-router";
import "./App.css";
import { useEffect, useState } from "react";
import { getAll } from "./../helpers/CRUD";
import PageTitle from "./components/PageTitle";
// Libs for error handlings
import { ErrorBoundary } from "react-error-boundary";
import FallbackToasts from "./components/errorHandling/FallbackToasts";
import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { Circles } from "react-loader-spinner";

// Lazy-loaded components
const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies"));
const TvSeries = lazy(() => import("./pages/TvSeries"));
const Bookmarked = lazy(() => import("./pages/Bookmarked"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(() => {
    const currentUser = sessionStorage.getItem(`user`);
    return JSON.parse(currentUser) || null;
  });
  const [error, setError] = useState();
  const [movies, setMovies] = useState([]);

  const getUsers = async () => {
    try {
      const users = await getAll(`users`);
      setUsers(users);
    } catch (err) {
      setError(err.message);
    }
  };

  const getMovies = async () => {
    try {
      const movies = await getAll("videos");
      setMovies(movies);
    } catch (err) {
      console.error("Error fetching movies:", err);
    }
  };

  const handleBookmarkToggle = (id, newBookmarkState) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, isBookmarked: newBookmarkState } : movie
      )
    );
  };

  useEffect(() => {
    getUsers();
    getMovies();
  }, []);

  return (
    <>
      <main>
        {/* Database erorrs */}
        {error && <div>OOPS</div>}
        {/* Components errors */}
        {/* Check components and their childs, if get error show a toast */}
        <Toaster position="top-right" />
        <ErrorBoundary FallbackComponent={FallbackToasts}>
          <Suspense
            fallback={
              <div>
                {" "}
                <div id="loadingCircle" className="loadingCircle">
                  <Circles
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                </div>
              </div>
            }
          >
            <Routes>
              <Route
                path="/signup"
                element={
                  <>
                    <PageTitle title="Sign up" />
                    <Signup
                      setUser={setUser}
                      setUsers={setUsers}
                      users={users}
                    />
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
                    <Home
                      user={user}
                      setUser={setUser}
                      entries={movies}
                      onBookmarkToggle={handleBookmarkToggle}
                    />
                  </>
                }
              />
              <Route
                path="/movies"
                element={
                  <>
                    <PageTitle title="Movies" />
                    <Movies
                      user={user}
                      setUser={setUser}
                      entries={movies}
                      onBookmarkToggle={handleBookmarkToggle}
                    />
                  </>
                }
              />
              <Route
                path="/tvseries"
                element={
                  <>
                    <PageTitle title="TV series" />
                    <TvSeries
                      user={user}
                      setUser={setUser}
                      entries={movies}
                      onBookmarkToggle={handleBookmarkToggle}
                    />
                  </>
                }
              />
              <Route
                path="/bookmarked"
                element={
                  <>
                    <PageTitle title="Bookmarks" />
                    <Bookmarked
                      user={user}
                      setUser={setUser}
                      entries={movies}
                      onBookmarkToggle={handleBookmarkToggle}
                    />
                  </>
                }
              />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
    </>
  );
}

export default App;
