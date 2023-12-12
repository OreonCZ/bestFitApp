import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createProduct } from "../../models/Product";
import { ProductType } from "../../models/Product";

export default function CreateProductForm(){
    const [formData, setFormData] = useState<ProductType>();
    const [info, setInfo] = useState(String);
    const navigate = useNavigate();

    const redirectToSuccesPage = (id: string) => {
      return navigate(`/createdproduct/${id}`);
    }

    const sendForm = async () => {
      const product = await createProduct(formData);
      if(product.status === 201) return redirectToSuccesPage(product.data._id);
      setInfo(product.msg);
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
        <p>Create product form</p>
        <form>
            <input required type="text" name="name" placeholder="Zadejte jméno produktu" onChange={e => handleChange(e)}/>
            <input required type="number" name="price" placeholder="Zadejte počet peněz" onChange={e => handleChange(e)}/>
            <input required type="number" name="quantity" placeholder="Kvantita produktu" onChange={e => handleChange(e)}/>
            <input required type="string" name="smallDescription" placeholder="Menší popisek produktu" onChange={e => handleChange(e)}/>
            <input required type="string" name="description" placeholder="Popis produktu" onChange={e => handleChange(e)}/>
            <button onClick={handlePost}>
                Create Product
            </button>
            <p>{info}</p>
        </form>
    </>
    );
}