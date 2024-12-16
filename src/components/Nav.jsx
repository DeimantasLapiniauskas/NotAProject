import { NavLink, useNavigate } from "react-router";
import { updateOne } from "./../../helpers/CRUD";

const Nav = ({ user, setUser }) => {
  const navigate = useNavigate();
  const logOut = async () => {
    try {
      const updatedUser = await updateOne("users", user.id, {
        isLoggedIn: false,
      });

      setUser(updatedUser);

      sessionStorage.setItem("user", JSON.stringify(updatedUser));

      navigate("/login");
    } catch (error) {
      console.error("Error nav:", error);
    }
  };
  return (
    <aside className="nav-bar">
      <div className="logo">
        <img src="/assets/logo.svg" alt="logo" />
      </div>
      <nav>
        <NavLink to="/home">
          <img
            src="/assets/icon-nav-home.svg"
            alt="home icon"
            className="PageIcon"
          />
        </NavLink>
        <NavLink to="/movies">
          <img
            src="/assets/icon-nav-movies.svg"
            alt="movies icon"
            className="PageIcon"
          />
        </NavLink>
        <NavLink to="/tvseries">
          <img
            src="/assets/icon-nav-tv-series.svg"
            alt="tv series icon"
            className="PageIcon"
          />
        </NavLink>
        <NavLink to="/bookmarked">
          <img
            src="/assets/icon-nav-bookmark.svg"
            alt="bookmark icon"
            className="PageIcon"
          />
        </NavLink>
      </nav>
      <button className="avatar" onClick={logOut}>
        <img src="/assets/image-avatar.png" alt="avatar" />
      </button>
    </aside>
  );
};

export default Nav;
