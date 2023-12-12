import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductType, getProduct, updateProduct, deleteProduct } from "../../models/Product";
import { useNavigate } from "react-router-dom";

// /product/857587676586
export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductType>();
  const [loaded, setLoaded] = useState(false);
  const [info, setInfo] = useState(String);
  const [formData, setFormData] = useState(String);

  const load = async () => {
    const product = await getProduct(id);
    if (product.status === 500) return setLoaded(null);
    if (product.status === 200) {
      setProduct(product.data);
      setLoaded(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value);
  };

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    if(product.name === formData){
        const data = await deleteProduct(product._id);
        if(data.status === 200) return redirectToSuccesPage(product._id);
        setInfo(data.msg);
        return;
    }
    setInfo("Špatně zadaný name produktu");
  };

  const redirectToSuccesPage = (id: string) => {
    return navigate(`/deletedproduct/${id}`);
  }

  useEffect(() => {
    load();
  }, []); //zavolá se při spuštění stránky

  if (!loaded) {
    return (
      <>
        <p>Načítá se produkt</p>
      </>
    );
  }

  return (
    <>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Small Description: {product.smallDescription}</p>  
      <p>Description: {product.description}</p>

      <form>
        <p>Pokud chcete smazat produkt, napiště jeho jméno</p>
        <input required type="text" placeholder={product.name} onChange={handleChange}/>
        <button onClick={handleDelete}>Smazat produkt</button>
        <p>{info}</p>
      </form>

      <Link to={`/updateproductform/${id}`}>
        <p>Aktualizovat produkty</p>
      </Link>

      <Link to={"/"}>
        <p>Přejít na hlavní stránku</p>
      </Link>
    </>
  );
}
