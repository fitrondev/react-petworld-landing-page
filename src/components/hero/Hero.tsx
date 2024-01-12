import { Banner } from "../../constants/image";
import Button from "../Button";

const Hero = () => {
  return (
    <section className="wrapper h-full flex flex-col md:flex-row gap-4 pt-2 md:pt-0">
      {/* Text Container */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start md:w-96 text-center md:text-start gap-10 md:gap-8 ">
        <h1 className="text-6xl font-bold">Pet Store & Beyond</h1>
        <p className="text-lg font-normal lg:w-[450px]">
          A pet store is a place where you can find a wide variety of products
          and services for your beloved pets.
        </p>
        <Button text="Get Started" type="secondary" />
      </div>
      {/* Image Container */}
      <div className="flex-1 w-full flex justify-center items-start md:items-center">
        <img src={Banner.Dog1} alt="" className="" />
      </div>
    </section>
  );
};
export default Hero;
