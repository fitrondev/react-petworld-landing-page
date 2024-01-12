import { useState } from "react";

import MenuOpen from "../../assets/menu.png";
import MenuClose from "../../assets/close.png";
import Button from "../Button";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {!open ? (
        <img
          src={MenuOpen}
          alt=""
          className="cursor-pointer h-5 w-5 transition"
          onClick={() => setOpen(true)}
        />
      ) : (
        <img
          src={MenuClose}
          alt=""
          className="cursor-pointer transition h-5 w-5"
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div className="flex flex-col justify-center items-center gap-8 bg-gray-100 text-white text-3xl absolute left-0 top-14 w-full h-[calc(100vh-3.5rem)] z-10">
          <Button text="Sign Up" type="primary" />
          <Button text="Sign In" type="primary" />
        </div>
      )}
    </div>
  );
};
export default Menu;
