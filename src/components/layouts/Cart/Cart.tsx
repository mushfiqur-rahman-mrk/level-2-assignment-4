
import { RootState } from '../../../redux/store';
import { addToCart, decreaseQuantity, removeFromCart, TProduct } from '../../../redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import Heading from '../../ui/heading/Heading';
import { GrPaypal, GrVisa } from 'react-icons/gr';



const Cart = () => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector((state: RootState) => state.cart.items);
    console.log(cartItems);
    const totalPrice = useAppSelector((state: RootState) => state.cart.totalPrice);

    const handleIncrease = (item: TProduct) => {
        dispatch(addToCart(item));
    };

    const handleDecrease = (item: TProduct) => {
        dispatch(decreaseQuantity(item));
    };

    const handleRemove = (item: TProduct) => {
        dispatch(removeFromCart(item._id));
    };

    return (
        <div className='mt-24'>
            <Heading heading='Cart' />
            <div className="flex justify-center gap-8">

                <div className="w-full lg:w-3/4 bg-white rounded-lg p-6 shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Cart - {cartItems.length} items</h2>
                    {cartItems.map((item) => (
                        <div key={item.name} className="flex justify-between items-center mb-6 border-b pb-4">
                            <div className="flex items-center flex-1">
                                <img src={item.image} alt={item.name} className="h-20 w-20 object-cover rounded-md" />
                                <div className="ml-4 flex flex-1">
                                    <h3 className="text-lg font-semibold">{item.name}</h3>

                                </div>
                            </div>
                            <div className="flex items-center flex-1">
                                <button onClick={() => handleDecrease(item)} className="px-3 py-1 bg-blue-500 text-white rounded-l">-</button>
                                <span className="px-3 py-1 bg-gray-100">{item.quantity}</span>
                                <button onClick={() => handleIncrease(item)} className="px-3 py-1 bg-blue-500 text-white rounded-r">+</button>
                            </div>
                            <div className='flex flex-1'>
                                <p className="text-lg">${item.price.toFixed(2)}</p>
                            </div>
                            <div className="flex flex-1 items-center space-x-2">
                                <button onClick={() => handleRemove(item)} className="text-white bg-red-500 rounded px-4 py-2">Remove</button>
                                <button className="text-white bg-blue-500 rounded px-4 py-2">Save for later</button>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Summary Section */}
                <div className="w-full lg:w-1/4 bg-white rounded-lg p-6 shadow-lg">
                    <h2 className="text-lg font-semibold mb-4">Summary</h2>
                    <div className="mb-4">
                        <p className="flex justify-between">
                            <span>Products</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </p>
                        <p className="flex justify-between">
                            <span>Shipping</span>
                            <span>Gratis</span>
                        </p>
                    </div>
                    <hr className="mb-4" />
                    <p className="flex justify-between font-semibold">
                        <span>Total amount (including VAT)</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </p>
                    <button className="w-full bg-blue-500 text-white font-semibold py-2 mt-4 rounded hover:bg-blue-700">GO TO CHECKOUT</button>
                </div>
            </div>
            <div className="mt-10">
                <div className="bg-white rounded-lg p-6  mb-6">
                    <h3 className="text-lg font-semibold">Expected shipping delivery</h3>
                    <p className="text-gray-500">12.10.2020 - 14.10.2020</p>
                </div>

                <div className="bg-white rounded-lg p-6 ">
                    <h3 className="text-lg font-semibold">We accept</h3>
                    <div className="flex text-pink-700 text-3xl space-x-4 mt-2">
                       <GrVisa></GrVisa>
                       <GrPaypal />
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
