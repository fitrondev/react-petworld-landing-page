import { Brand as Brands } from "../../constants/data";

const Logos = () => {
  return (
    <div className="wrapper w-full h-full flex justify-center items-center p-4">
      <div className="h-full w-full flex flex-wrap justify-center items-center gap-x-5 md:gap-x-10">
        {Brands.map((item) => (
          <div key={item.id} className="flex justify-center items-center">
            <img src={item.img} alt="" className="h-6 w-fit md:h-7 lg:h-9" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Logos;
