import { useEffect } from "react";
import Recommended from "../components/Recommend";
import { useNavigate } from "react-router";

const Home = ({ user }) => {
  console.log(user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(`/login`);
    }
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
