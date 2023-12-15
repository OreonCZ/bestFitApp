import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { GlassType, getGlasses } from "../../models/Glass";
import GlassLink from "../../components/GlassLink";

export default function GlassList() {
    const [glasses, setGlasses] = useState<GlassType[]>();
    const [loaded, setLoaded] = useState(false);

    const load = async () => {
      const glasses = await getGlasses();
      if(glasses.status === 500) return setLoaded(null);
      if(glasses.status === 200){
        setGlasses(glasses.data);
        setLoaded(true);
      }
    }

    useEffect (() => {
        load();
    },[]);

    if(loaded == null){
        return(
            <>
            <p>Brejle nebyly nalezeny</p>
            <Link to={"/"}>
                <p>Zpět na hlavní stránku</p>
            </Link>
            </>
        )
    }
    if(!loaded){
        return(
            <>
            <p>Načítám brejle</p>
            <Link to={"/"}>
                <p>Zpět na hlavní stránku</p>
            </Link>
            </>
        )
    }

    return(
        <>
        {
            glasses.map((glass, index) => (
                <GlassLink key={index} {...glass}/>   //vezme každý prvek a vloží to na danou pozici
            ))
        }        
        <Link to={"/"}>
                <p>Zpět na hlavní stránku</p>
        </Link>
        </>
    )
}