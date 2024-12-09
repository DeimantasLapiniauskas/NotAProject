import { useNavigate } from "react-router";
import { useEffect } from "react";
import Nav from "../components/Nav";

const Bookmarked = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // if (!user) navigate(`/login`);
  }, []);
  return (
    <>
      <Nav/>
      <div className="pagecontent">
        <h1>BOOKMARKED</h1>
      </div>
    </>
  );
};

export default Bookmarked;
