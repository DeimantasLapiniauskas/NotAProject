import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import BookmarkedList from "./../components/BookmarkedList";
import SearchBar from "../components/SearchBar";


const Bookmarked = ({ user, setUser, entries }) => {
  const navigate = useNavigate();
  const [searching, setSearching] = useState(false);
  // useEffect(() => {
  //   if (!user?.isLoggedIn) navigate(`/login`);
  // }, []);
  return (
    <>
      <Nav user={user} setUser={setUser} />
      <div className="pagecontent">
        <SearchBar
          entries={entries}
          searching={searching}
          setSearching={setSearching}
          page="Bookmarked"
        />
        {!searching&&<BookmarkedList entries={entries}/>}
      </div>
    </>
  );
};

export default Bookmarked;
