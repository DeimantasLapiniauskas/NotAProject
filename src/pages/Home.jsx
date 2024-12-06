import { useNavigate } from "react-router";
import Recommended from "../components/Recommend";
import { useEffect } from "react";
const Home = ({ user }) => {
  console.log(user);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);

    if (!user) navigate(`/login`);
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
