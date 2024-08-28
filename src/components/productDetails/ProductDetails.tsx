import { useParams } from "react-router-dom";
import { useGetSinglrProductQuery } from "../../redux/api/api";
import { PiPaypalLogo } from "react-icons/pi";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { addToCart, decreaseQuantity, TProduct } from "../../redux/features/cartSlice";
import { RootState } from "../../redux/store";

const ProductDetails = () => {
    const dispatch = useAppDispatch();
    // Extract productId from URL
    const { productId } = useParams();
    console.log(productId);
    
    // Use the productId to fetch the product data
    const { data, error, isLoading } = useGetSinglrProductQuery(productId);
    const cartItems = useAppSelector((state: RootState ) => state.cart.items);
    const Items = cartItems.map(item => item.quantity)
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong: {error.toString()}</p>;
    const product = data.data;
    // Destructure product details from data
    const { name, price, description, image } = data.data || {};

    const handleAddToCart = (product: TProduct) => {
        dispatch(addToCart(product));
    };

    const handleIncrease = (item: TProduct) => {
        dispatch(addToCart(item));
    };

    const handleDecrease = (item: TProduct) => {
        dispatch(decreaseQuantity(item));
    };
    return (
        <div className="container mx-auto p-5">
            <div className="grid md:grid-cols-2 gap-10">
                <div>
                    <img src={image} alt={name} className="w-full object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-3">{name}</h1>
                    <p className="text-2xl text-gray-700 mb-3">${price}</p>
                    <p className="text-gray-500 mb-3">{description}</p>

                    <div className="flex items-center mb-5">
                        <span className="mr-3 font-bold">Quantity</span>
                        <div className="flex items-center border border-gray-300 rounded">
                            <button onClick={() => handleDecrease(product)} className="px-3 py-1 border-r border-gray-300">-</button>
                            <span className="px-3 py-1">{...Items}</span>
                            <button onClick={() => handleIncrease(product)} className="px-3 py-1 border-l border-gray-300">+</button>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-3">
                        <button onClick={() => handleAddToCart(product)} 
                        className="bg-black text-white py-2 px-4 rounded">Add to Cart</button>
                        <button className="bg-yellow-500 text-black py-2 flex justify-center items-center px-4 rounded"><PiPaypalLogo/>Buy with PayPal</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
