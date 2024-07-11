import { Routes, Route } from "react-router-dom";
import { Home,Product,ProductDetail,Checkout } from "../pages";


export const AllRoutes=()=>{
    return (
        <div>
            <Routes>
            <Route path="/" element={<Home />}/>
                <Route path="home" element={<Home />}/>
                <Route path="product" element={<Product />}/>
                <Route path="home/product" element={<Product />}/>
                <Route path="product-detail" element={<ProductDetail />}/>
                <Route path="home/product/product-detail" element={<ProductDetail />}/>
                <Route path="product-cart" element={<ProductDetail />}/>
                
                <Route path="checkout" element={<Checkout />}/>
            </Routes>
        </div>
    )
}