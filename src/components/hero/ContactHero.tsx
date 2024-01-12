import { Banner } from "../../constants/image";
import Button from "../Button";

const ContactHero = () => {
  return (
    <section className="md:w-[80%] wrapper h-full flex flex-col md:flex-row gap-4 py-20">
      {/* Text Container */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start md:w-96 text-center md:text-start gap-10 md:gap-8 ">
        <h1 className="text-6xl font-bold">Let’s talk, woof! </h1>
        <p className="text-lg font-normal lg:w-[450px]">
          You can ask us questions about your pet, and we will be happy to
          answer you!
        </p>
        <Button text="Contact Us" type="secondary" />
      </div>
      {/* Image Container */}
      <div className="flex-1 w-full flex justify-center mt-14">
        <img src={Banner.Dog2} alt="" className="" />
      </div>
    </section>
  );
};
export default ContactHero;
