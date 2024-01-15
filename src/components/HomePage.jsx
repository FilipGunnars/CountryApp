import { Link } from "react-router-dom";

const Homepage = ({lightmode}) => {
    return (
        <div className="homepage" style={ lightmode ? {backgroundColor: "var(--light)", color: "var(--black)"} : {backgroundColor: "var(--darkest)", color: "var(--white)"}}>
            <h1>HOMEPAGE</h1>
            <Link to="/swe">swe</Link>
        </div>
    );
}
 
export default Homepage;