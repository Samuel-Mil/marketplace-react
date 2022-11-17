import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>404</h1>
      <Link to="/home">Go to home!</Link>
    </>

  );
}

export default NotFound;
