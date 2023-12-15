import { GlassType } from "../models/Glass";
import { Link } from "react-router-dom";


export default function UserLink(props: GlassType){
    return(
        <>
        <p>Name: {props.name}</p>
        <Link to={`/glass/${props._id}`}>
            <p>Prejit na brejle</p>
        </Link>
        </>
    )
}