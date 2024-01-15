import { Link, useParams } from "react-router-dom";

const CountryPage = ({lightmode}) => {
    const { id } = useParams()

    return (
        <div className="countrypage" style={ lightmode ? {backgroundColor: "var(--light)", color: "var(--black)"} : {backgroundColor: "var(--darkest)", color: "var(--white)"}}>
            <h1>COUNTRYPAGE #{id}</h1>
            <Link to="/">back to home</Link>
        </div>
    );
}
 
export default CountryPage;