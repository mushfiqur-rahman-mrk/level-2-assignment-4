type THeading =  {
 heading: string
}

const Heading = ({heading}: THeading) => {
    return (
        <div className="text-center my-10">
            <h3 className="text-[#b19668] font-camping text-3xl font-bold ">{heading}</h3>
            <p className="items-center text-[#b19668]">- - - - - - - - - - - - -</p>
        </div>
    );
};

export default Heading;