//User
import { HashRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "../MainPage/MainPage";
import Dashboard from "../Dashboard/Dashboard";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import NotFound from "../NotFound/NotFound";
import CreateUserForm from "../CreateUserForm/CreateUserForm";
import CreatedUser from "../CreatedUser/CreatedUser";
import User from "../User/User";
import UserList from "../UserList/UserList";
import DeletedUser from "../DeletedUser/DeletedUser";
import UpdatedUser from "../UpdatedUser/UpdatedUser";
import UpdateUserForm from "../UpdateUserForm/UpdateUserForm";
import CreateProductForm from "../CreateProductForm/CreateProductForm";
import Product from "../Product/Product";
import DeletedProduct from "../DeletedProduct/DeletedProduct";
import UpdatedProduct from "../UpdatedProduct/UpdatedProduct";
import UpdateProductForm from "../UpdateProductForm/UpdateProductForm";
import ProductList from "../ProductList/ProductList"


//Produkt
import CreatedProduct from "../CreatedProduct/CreatedProduct";

export function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/signin" element={<SignIn />}/>
                <Route path="/signup" element={<SignUp />}/>

                <Route path="/createuser" element={<CreateUserForm />}/>
                <Route path="/createduser/:id" element={<CreatedUser />} />
                <Route path="/user/:id" element={<User />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/deleteduser/:id" element={<DeletedUser />} />
                <Route path="/updateduser/:id" element={<UpdatedUser />} />
                <Route path="/updateuserform/:id" element={<UpdateUserForm />} />
                
                <Route path="/createproduct" element={<CreateProductForm />}/>
                <Route path="/createdproduct/:id" element={<CreatedProduct />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/deletedproduct/:id" element={<DeletedProduct />} />
                <Route path="/updatedproduct/:id" element={<UpdatedProduct />} />
                <Route path="/updateproductform/:id" element={<UpdateProductForm />} />
                <Route path="*" element={<NotFound />} />

                <Route path="/createproduct/:id" element={<CreatedProduct/>}/>
            </Routes>
        </HashRouter>
    )
}