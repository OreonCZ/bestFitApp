import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function CreatedGlass() {
    const { id } = useParams();

    return (
        <>
        <p>Brejle byly vytvořeny!</p>
        <Link to={`/glass/${id}`}>
        <p>Podívat se na brejle: {id}</p>
        </Link>
        <Link to={"/"}>
        <p>Vrátit se zpět na hlavní stránku</p>
        </Link>
        </>
    )
}