import { Link } from "react-router-dom";

const NotFound = ({ lightmode }) => {
  return (
    <div
      className="not-found-container"
      style={
        lightmode
          ? { backgroundColor: "var(--light)", color: "var(--black)" }
          : { backgroundColor: "var(--darkest)", color: "var(--white)" }
      }
    >
      <h2>Error - The page you are looking for doesn't exist</h2>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};

export default NotFound;