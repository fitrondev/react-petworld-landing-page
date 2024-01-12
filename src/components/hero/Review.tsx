import Profile from "../../assets/fitron.jpeg";

const Review = () => {
  return (
    <section className="md:w-[80%] wrapper h-full flex flex-col justify-center items-center md:flex-row gap-4 p-4 md:pt-0">
      {/* Image Container */}
      <div className="flex-1 w-[265px] h-full flex justify-center items-start md:items-center p-4">
        <img src={Profile} alt="" className="h-[380px] rounded-full" />
      </div>
      {/* Text Container */}
      <div className="flex-1 w-[265px] flex flex-col justify-center items-center md:items-start text-start gap-10 md:gap-8 ">
        <p className="text-[18px] flex flex-col">
          <span className="font-bold">
            We love using 'PETWORLD' products. Environmentally friendly and
            sustainable. We have the sustainable dog bowls and regularly use the
            mint scented poo bags which were all such great value for money.
          </span>
          <span className="text-opacity-50">
            <br /> Fitron Ansori
          </span>
        </p>
      </div>
    </section>
  );
};
export default Review;
