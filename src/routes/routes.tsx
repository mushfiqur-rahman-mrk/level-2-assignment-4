import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";

import Products from "../pages/ShowProduct/Products";
import Cart from "../components/layouts/Cart/Cart";
import App from "../App";
import ProductDetails from "../components/productDetails/ProductDetails";
import Review from "../pages/reviews/Review";
import AboutUs from "../pages/home/AboutUs";
import Contact from "../pages/home/Contact";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />, // Use the Layout component
        children: [
            { path: '/', element: <Home /> },
            { path: '/products', element: <Products /> },
            { path: '/cart', element: <Cart /> },
            {
                path: "/product/:productId",
                element: <ProductDetails />
            },
            {
                path: "/review",
                element: <Review />
            },
            {
                path: "/about",
                element: <AboutUs/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
         
        ],
        
    },
]);
export default routes