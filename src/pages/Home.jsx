import { useEffect } from "react";
import Recommended from "../components/Recommended";
import Trending from "../components/Trending";
import { useNavigate } from "react-router";
import Nav from "../components/Nav";

const Home = ({ user, setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.isLoggedIn) navigate(`/login`);
  }, []);
  return (
    <>
      <Nav user={user} setUser={setUser} />
      <div className="pagecontent">
        <Trending />
        <h1>HOME</h1>
        <Recommended />
      </div>
    </>
  );
};

export default Home;
