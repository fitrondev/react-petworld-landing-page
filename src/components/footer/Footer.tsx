import { Logo, SocialMedia } from "../../constants/image";

const Footer = () => {
  return (
    <div className="wrapper flex flex-col justify-center items-center py-2 md:flex-row md:justify-between">
      <div className="mb-4 md:mb-0">
        <img src={Logo.navLogo} alt="" className="" />
      </div>
      <div className="flex gap-2">
        {Object.entries(SocialMedia).map(([key, value]) => (
          <a href="#" className="" key={key}>
            <img src={value} alt={key} />
          </a>
        ))}
      </div>
    </div>
  );
};
export default Footer;
