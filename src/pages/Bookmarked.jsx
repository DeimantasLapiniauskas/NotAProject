import { useNavigate } from "react-router";
import { useEffect } from "react";
import Nav from "../components/Nav";
import BookmarkedList from "./../components/BookmarkedList";

const Bookmarked = ({ user, setUser, movies }) => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user?.isLoggedIn) navigate(`/login`);
  // }, []);
  return (
    <>
      <Nav user={user} setUser={setUser} />
      <div className="pagecontent">
        <BookmarkedList />
      </div>
    </>
  );
};

export default Bookmarked;
