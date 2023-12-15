import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlassType, getGlass, updateGlass, deleteGlass } from "../../models/Glass";
import { useNavigate } from "react-router-dom";

// /user/857587676586
export default function Glass() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [glass, setGlass] = useState<GlassType>();
  const [loaded, setLoaded] = useState(false);
  const [info, setInfo] = useState(String);
  const [formData, setFormData] = useState(String);

  const load = async () => {
    const glass = await getGlass(id);
    if (glass.status === 500) return setLoaded(null);
    if (glass.status === 200) {
      setGlass(glass.data);
      setLoaded(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value);
  };

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    if(glass.name === formData){
        const data = await deleteGlass(glass._id);
        if(data.status === 200) return redirectToSuccesPage(glass._id);
        setInfo(data.msg);
        return;
    }
    setInfo("Špatně zadaný name");
  };

  const redirectToSuccesPage = (id: string) => {
    return navigate(`/deletedglass/${id}`);
  }

  useEffect(() => {
    load();
  }, []); //zavolá se při spuštění stránky

  if (!loaded) {
    return (
      <>
        <p>Načítá se uživatel</p>
      </>
    );
  }

  return (
    <>
      <p>Name: {glass.name}</p>
      <p>Brand: {glass.brand}</p>
      <p>Price: {glass.price}</p>
      <p>Material: {glass.material}</p>
      <p>Weight: {glass.weight}</p>
      <p>Color: {glass.color}</p>

      <form>
        <p>Pokud chcete smazat brejle, napiště jeho name</p>
        <input required type="text" placeholder={glass.name} onChange={handleChange}/>
        <button onClick={handleDelete}>Smazat uživatele</button>
        <p>{info}</p>
      </form>

      <Link to={`/updateglassform/${id}`}>
        <p>Aktualizovat brejle</p>
      </Link>

      <Link to={"/"}>
        <p>Přejít na hlavní stránku</p>
      </Link>
    </>
  );
}
