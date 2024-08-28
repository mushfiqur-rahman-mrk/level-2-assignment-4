import '../../../App.css'
const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden font-camping">
      <div className="h-full w-full">
        <video
          src="https://thumbsnap.com/i/kjDFL3WA.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/src/assets/4125025-uhd_3840_2160_24fps.mp4" />
        </video>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
        <h3 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
          Gear Up for Every Camping Adventure
        </h3>
        <button className="global-button mt-5 sm:mt-8 md:mt-10">
          Shop Now
        </button>
      </div>
    </div>

  );
};

export default Hero;