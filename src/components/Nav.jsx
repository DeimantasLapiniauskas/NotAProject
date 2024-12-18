import { NavLink, useNavigate } from "react-router";
import { updateOne } from "./../../helpers/CRUD";

const Nav = ({ user, setUser,setSearching, setSearchValue }) => {
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
        <NavLink to="/home" onClick={()=> {setSearching(false); setSearchValue("")}}>
          <img
            src="/assets/icon-nav-home.svg"
            alt="home icon"
            className="PageIcon"
          />
        </NavLink>
        <NavLink to="/movies" onClick={()=> {setSearching(false); setSearchValue("")}}>
          <img
            src="/assets/icon-nav-movies.svg"
            alt="movies icon"
            className="PageIcon"
          />
        </NavLink>
        <NavLink to="/tvseries" onClick={()=> {setSearching(false); setSearchValue("")}}>
          <img
            src="/assets/icon-nav-tv-series.svg"
            alt="tv series icon"
            className="PageIcon"
          />
        </NavLink>
        <NavLink to="/bookmarked" onClick={()=> {setSearching(false); setSearchValue("")}}>
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
