import { useNavigate } from "react-router";
import { useEffect } from "react";

const Movies = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate(`/login`);
  }, []);
  return (
    <>
      <>
        <h1>MOVIES</h1>
      </>
    </>
  );
};

export default Movies;
