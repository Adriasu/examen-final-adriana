import Link from "next/link";
import React from "react";

const Buttons = ({
  text,
  typeBtn,
  link,
  icon,
  type = "button",
  onClick,
  disabled,
}) => {
  const buttonStyle = () => {
    switch (typeBtn) {
      case "green":
        return "px-6 py-3 bg-[#2A5B45] rounded text-white";
      case "gray":
        return "px-6 py-3 bg-[#515051] rounded text-white";
      case "brown":
        return "px-6 py-3 bg-[#1F1815] rounded text-white";
      case "add":
        return "p-2 text-white rounded bg-[#2A5B45B2] group-hover:bg-[#2A5B45]";
      case "soldOut":
        return "p-2 text-white rounded bg-[#E3DED7] cursor-default";
      case "white":
        return "px-6 py-3 rounded text-[#2A5B45]";
      case "cart":
        return "px-4 py-2 text-white rounded bg-[#2A5B45] hover:scale-[1.1]";
        case "clear":
        return "bg-red-900 px-4 py-2 text-white rounded hover:scale-[1.1]";
      default:
        return "";
    }
  };

  const commonClasses =
    "font-semibold leading-4 text-[14px] flex justify-center items-center gap-2";

  if (typeBtn === "soldOut") {
    return (
      <button disabled className={`${commonClasses} ${buttonStyle()}`}>
        {icon} {text}
      </button>
    );
  }

  const ButtonContent = () => (
    <button disabled={disabled} className={`${commonClasses} ${buttonStyle()}`}>
      {icon} {text}
    </button>
  );

  return link ? (
    <Link href={link}>
      <ButtonContent />
    </Link>
  ) : (
    <button
      className={`${commonClasses} ${buttonStyle()}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {icon} {text}
    </button>
  );
};

export default Buttons;
