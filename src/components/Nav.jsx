import { NavLink } from "react-router";
import logo from "/assets/logo.svg";
import home from "/assets/icon-nav-home.svg";
import movies from "/assets/icon-nav-movies.svg";
import tvSeries from "/assets/icon-nav-tv-series.svg";
import bookmark from "/assets/icon-nav-bookmark.svg";
import avatar from "/assets/image-avatar.png";

const Nav = () => {
  return (
    <aside className="nav-bar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <NavLink to="/home">
          <img src={home} alt="home icon" className="PageIcon" />
        </NavLink>
        <NavLink to="/movies">
          <img src={movies} alt="movies icon" className="PageIcon" />
        </NavLink>
        <NavLink to="/tvseries">
          <img src={tvSeries} alt="tv series icon" className="PageIcon" />
        </NavLink>
        <NavLink to="/bookmarked">
          <img src={bookmark} alt="bookmark icon" className="PageIcon" />
        </NavLink>
      </nav>
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
    </aside>
  );
};

export default Nav;
