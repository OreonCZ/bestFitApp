import { Link } from "react-router-dom"

export function MainPage() {
    return (
        <>
            <h1>Hello world</h1>
            <img src="./goblin.png" alt="goblin" />
            <Link to={"/dashboard"}>
                <p>Dashboard</p>
            </Link>
            <Link to={"/signin"}>
                <p>Sign In</p>
            </Link>
            <Link to={"/signup"}>
                <p>Sign Up</p>
            </Link>
            <Link to={"/createuser"}>
                <p>Create user</p>
            </Link>
            <Link to={"/users"}>
                <p>Users List</p>
            </Link>

            <Link to={"/createproduct"}>
                <p>Create produkt</p>
            </Link> 
            
             <Link to={"/products"}>
                <p>Product list</p>
            </Link>
        </>
    )
}