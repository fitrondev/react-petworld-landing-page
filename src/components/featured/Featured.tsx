import { Feature } from "../../constants/data";

const Featured = () => {
  return (
    <div className="wrapper flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:flex lg:flex-row lg:justify-between">
      {Feature.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-center items-center p-14 md:p-4"
        >
          <div className="h-56 w-48 flex flex-col justify-center items-center text-center gap-4">
            <img src={item.img} alt="" className="h-20 w-20" />
            <h3 className="font-bold">{item.title}</h3>
            <p className="opacity-50">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Featured;
