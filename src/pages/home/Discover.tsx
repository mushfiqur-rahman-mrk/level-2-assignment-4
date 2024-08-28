import Heading from "../../components/ui/heading/Heading";


const Discover = () => {
    return (
        <div className="my-10">
            <Heading heading="Discover Us" />
            <div className="flex font-camping flex-col md:flex-row items-center bg-slate-100 h-auto md:h-72 gap-5 md:gap-10 p-5 md:p-10">
                <div className="relative h-64 w-full md:flex-1">
                    <video
                        src="/src/assets/9113144-uhd_3840_2160_30fps.mp4"
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="https://thumbsnap.com/i/UfvHSdVU.mp4" />
                    </video>
                </div>
                <div className="text-center flex-1 space-y-3 md:space-y-5 ">
                    <h4 className="font-extrabold text-[#2c3932] text-lg md:text-xl lg:text-2xl">
                        Discover The New Beauty Of Nature
                    </h4>
                    <p className="text-[#2c3932] text-sm md:text-base lg:text-lg">
                        Forged around a campfire, they are driven to extend and deepen outdoor experiences by providing the most sustainable solutions for apparel, footwear, and equipment, designing products for hiking, trekking, commuting, camping & bikepacking to enable the journey. Jack Wolfskin always encourages people to embrace wanderlust and to utilize time in nature to recharge. From their first steps, to their last breath, life is made by moments of discovery.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Discover;