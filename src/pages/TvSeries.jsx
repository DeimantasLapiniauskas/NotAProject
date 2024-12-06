import { useNavigate } from "react-router";
import { useEffect } from "react";

const TvSeries = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate(`/login`);
  }, []);
  return (
    <>
      <>
        <h1>TV SERIES</h1>
      </>
    </>
  );
};

export default TvSeries;
