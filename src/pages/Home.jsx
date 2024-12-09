import { useEffect } from "react";
import Recommended from "../components/Recommend";
import { useNavigate } from "react-router";
import Nav from "../components/Nav";

const Home = ({ user }) => {

  const navigate = useNavigate();

  useEffect(() => {
    // if (!user) {
    //   navigate(`/login`);
    // }
  }, []);
  return (
    <>
      <Nav/>
      <div className="pagecontent">
        <h1>HOME</h1>
        <Recommended />
      </div>
    </>
  );
};

export default Home;
