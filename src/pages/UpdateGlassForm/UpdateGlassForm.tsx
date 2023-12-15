import { useParams, useNavigate, Link } from "react-router-dom";
import { GlassType, getGlass, updateGlass } from "../../models/Glass";
import { useEffect, useState } from "react";

export default function UpdateUserForm() {
    const { id } = useParams();
    const [glass, setGlass] = useState<GlassType>();
    const [loaded, setLoaded] = useState(false);
    const [formData, setFormData] = useState<GlassType>();
    const [info, setInfo] = useState(String);
    const navigate = useNavigate();

const redirectToSuccesPage = (id: string) => {
    return navigate(`/updatedglass/${id}`);
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
}

const handleUpdate = (e: React.FormEvent) => {
  e.preventDefault();
  sendForm();
}

const sendForm = async () => {
    const glass = await updateGlass(id, formData);
    if(glass.status === 201) return redirectToSuccesPage(glass.data._id);
    setInfo(glass.msg);
  }

  const load = async () => {
    const glass = await getGlass(id);
    if(glass.status === 500) return setLoaded(null);
    if(glass.status === 200){
        setGlass(glass.data)
        setLoaded(true);
        return;
    }
  }

  useEffect(() => {
    load();
  },[])

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

  if (!loaded) {
    return (
      <>
        <p>Načítají se brejle</p>
      </>
    );
  }
  
  return(
    <>
        <Link to={"/"}>
            <p>Zpět na hlavní stránku</p>
        </Link>
        <p>Glass: ${id}</p>
        <form>
        <input required type="text" name="name" placeholder="Zadejte name" defaultValue={glass.name} onChange={e => handleChange(e)}/>
            <input required type="text" name="brand" placeholder="Zadejte brand" defaultValue={glass.brand} onChange={e => handleChange(e)}/>
            <input required type="number" name="price" placeholder="Zadejte price" defaultValue={glass.price} onChange={e => handleChange(e)}/>
            <input required type="text" name="material" placeholder="Zadejte material" defaultValue={glass.material} onChange={e => handleChange(e)}/>
            <input required type="number" name="weight" placeholder="Zadejte weight" defaultValue={glass.weight} onChange={e => handleChange(e)}/>
            <input required type="text" name="color" placeholder="Zadejte color" defaultValue={glass.color} onChange={e => handleChange(e)}/>
            <button onClick={handleUpdate}>
                Update Glass
            </button>
            <p>{info}</p>
        </form>
    </>
  )
}