import { useNavigate } from "react-router";
import { useEffect } from "react";

const Bookmarked = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate(`/login`);
  }, []);
  return (
    <>
      <>
        <h1>BOOKMARKED</h1>
      </>
    </>
  );
};

export default Bookmarked;
