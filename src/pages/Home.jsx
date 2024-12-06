import { useNavigate } from "react-router";
import Recommended from "../components/Recommend";
const Home = ({ user }) => {
  const navigate = useNavigate();

  // if (!user) navigate(`/signup`);

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
