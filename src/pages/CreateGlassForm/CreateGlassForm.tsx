import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createGlass } from "../../models/Glass";
import { GlassType } from "../../models/Glass";

export default function CreateGlassForm(){
    const [formData, setFormData] = useState<GlassType>();
    const [info, setInfo] = useState(String);
    const navigate = useNavigate();

    const redirectToSuccesPage = (id: string) => {
      return navigate(`/createdglass/${id}`);
    }

    const sendForm = async () => {
      const glass = await createGlass(formData);
      if(glass.status === 201) return redirectToSuccesPage(glass.data._id);
      setInfo(glass.msg);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handlePost = (e: React.FormEvent) => {
      e.preventDefault();
      sendForm();
    }

    return(
    <>
        <p>Create glass form</p>
        <form>
            <input required type="text" name="name" placeholder="Zadejte name" onChange={e => handleChange(e)}/>
            <input required type="text" name="brand" placeholder="Zadejte brand" onChange={e => handleChange(e)}/>
            <input required type="number" name="price" placeholder="Zadejte price" onChange={e => handleChange(e)}/>
            <input required type="text" name="material" placeholder="Zadejte material" onChange={e => handleChange(e)}/>
            <input required type="number" name="weight" placeholder="Zadejte weight" onChange={e => handleChange(e)}/>
            <input required type="text" name="color" placeholder="Zadejte color" onChange={e => handleChange(e)}/>
            <button onClick={handlePost}>
                Create Glass
            </button>
            <p>{info}</p>
        </form>
    </>
    );
}