type ButtonProps = {
  text: string;
  type?: "primary" | "secondary" | "none";
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, type }) => {
  return (
    <button
      className={`px-5 py-2 rounded-md text-[18px] font-medium w-36 ${
        type === "primary"
          ? "bg-blue-500 text-white"
          : type === "secondary"
          ? "bg-orange-300 text-black"
          : "bg-transparent text-black"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
