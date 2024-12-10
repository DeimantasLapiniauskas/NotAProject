import { Route, Routes, Navigate } from "react-router";
import "./App.css";
import { useEffect, useState } from "react";
import { getAll } from "./../helpers/CRUD";
import PageTitle from "./components/PageTitle";
// Libs for error hadlings
import { ErrorBoundary } from "react-error-boundary";
import FallbackToasts from "./components/errorHandling/FallbackToasts";
import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";

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
        {/* Database erorrs */}
        {error && <div>OOPS</div>}
        {/* Components errors */}
        {/* Check components and they childs, if get error show a toast */}
        <Toaster position="top-right" />
        <ErrorBoundary FallbackComponent={FallbackToasts}>
          <Suspense fallback={<div>Loading...</div>}>
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
          </Suspense>
        </ErrorBoundary>
      </main>
    </>
  );
}

export default App;
