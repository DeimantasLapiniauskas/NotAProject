import { useNavigate } from "react-router";
import { useEffect } from "react";
import Nav from "../components/Nav";

const Bookmarked = ({ user, setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.isLoggedIn) navigate(`/login`);
  }, []);
  return (
    <>
      <Nav user={user} setUser={setUser} />
      <div className="pagecontent">
        <h1>BOOKMARKED</h1>
      </div>
    </>
  );
};

export default Bookmarked;
