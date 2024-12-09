import { useEffect } from "react";
import Recommended from "../components/Recommend";
import { useNavigate } from "react-router";

const Home = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Code below force signup, commented because not relevant yet

    // if (!user) {
    //   navigate(`/signup`);
    // }
  }, []);
  return (
    <>
      <>
        <h1>HOME</h1>
        <Recommended />
      </>
    </>
  );
};

export default Home;
