
// import Sidebar from "../../components/ui/sidebar/Sidebar";
import { useGetProductQuery } from "../../redux/api/api";
// import { addToCart } from '../../redux/features/cartSlice';
// import { useAppDispatch } from '../../redux/hook';

import Heading from '../../components/ui/heading/Heading';

import '../../App.css'
import { NavLink } from "react-router-dom";
import { BiDetail } from "react-icons/bi";

type TProduct = {
    _id: string;
    name: string;
    price: number;
    stockQuantity: number;
    description: string;
    category: string;
    ratings: number;
    image: string;
};

const Products = () => {
   
    const { data, error, isLoading } = useGetProductQuery(undefined);


    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong: {error.toString()}</p>;

    const products = data?.data || [];

    // const handleAddToCart = (product: TProduct) => {
    //     dispatch(addToCart(product));
    // };

    return (
        <div className="relative mt-28">
  <Heading heading="Feature Products" />

  <div className="flex flex-col lg:flex-row justify-center gap-8 mt-10 px-4 md:px-8">
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product: TProduct) => (
        <div key={product.name} className="rounded-lg overflow-hidden flex flex-col min-h-[400px]">
          <img src={product.image} alt={product.name} className="w-full h-40 md:h-56 object-cover" />
          <div className="p-4 flex flex-col flex-grow">
            <div className="flex-grow">
              <h3 className="text-md md:text-lg font-semibold">{product.name}</h3>
              <p className="text-primary">${product.price}</p>
              <p className="text-gray-500">{product.description}</p>
            </div>
            <NavLink to={`/product/${product._id}`} className="mt-auto">
              <button className="global-button2 flex justify-center items-center gap-2 w-full">
                <BiDetail className="size-5" />
                See Details
              </button>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


    );
};

export default Products;
