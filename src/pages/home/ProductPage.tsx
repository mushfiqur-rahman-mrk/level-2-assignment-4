import Heading from "../../components/ui/heading/Heading";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../App.css'
import { useGetProductQuery } from "../../redux/api/api";
import { NavLink } from "react-router-dom";

 type TProduct = {
   _id: string;
   name: string;
   price: number;
   stockQuantity?: number;
   description?: string;
   category?: string;
   ratings?: number;
   image: string;
   };
const ProductPage = () => {

    
    const { data, error, isLoading } = useGetProductQuery(undefined);


    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong: {error.toString()}</p>;

    const products = data?.data || [];


    return (
        <div className="my-5">
            <Heading heading={'New Arrivals'} />

            <Swiper
                spaceBetween={10} // Space between slides
                breakpoints={{
                    // When the screen width is ≥ 640px (tablet)
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    // When the screen width is ≥ 768px (small desktop)
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    // When the screen width is ≥ 1024px (large desktop)
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                className="mySwiper"
            >
                {products.map((product: TProduct)=> (
                    <SwiperSlide key={product._id}>
                        <div key={product.name} className="bg-white  rounded-lg overflow-hidden">
                            <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
                            <div className="p-4 ">
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p className="text-gray-500 mb-7">${product.price}</p>
                                <NavLink
                                    to={`/product/${product._id}`}
                                    className="global-button2"
                                >
                                    See Details
                                </NavLink>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductPage;
