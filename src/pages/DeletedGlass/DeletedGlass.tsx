import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function DeletedGlass() {
    const { id } = useParams();

    return (
        <>
        <p>Brejle {id} byly odstraněny!</p>
        <Link to={"/"}>
        <p>Vrátit se zpět na hlavní stránku</p>
        </Link>
        </>
    )
}