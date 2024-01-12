import { Logo } from "../../constants/image";
import Button from "../Button";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="wrapper">
      <nav className="flex justify-between items-center py-4 md:py-5">
        {/* Logo */}
        <div className="w-32 h-8">
          <img src={Logo.navLogo} alt="" className="object-cover" />
        </div>

        <div className="md:hidden">
          <Menu />
        </div>

        <div className="hidden w-fit md:flex md:justify-center md:items-center md:gap-2">
          <Button text="Sign Up" type="none" />
          <Button text="Sign In" type="primary" />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
