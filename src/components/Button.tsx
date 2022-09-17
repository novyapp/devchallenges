import React from "react";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

type Props = {
  size?: "sm" | "md" | "lg";
  color?: string;
  variant?: string;
  children?: any;
  disabled?: boolean;
  disableShadow?: boolean;
  startIcon?: string;
};

const Button = ({
  size,
  color = "default",
  variant,
  children,
  disabled,
  disableShadow,
  startIcon,
}: Props) => {
  const defaultColor = `hover:bg-[#AEAEAE] bg-[#E0E0E0] disabled:hover:bg-[#E0E0E0]`;
  const primaryColor = `hover:bg-[#0039CB] bg-[#2962FF] text-white`;
  const secondaryColor = `hover:bg-[#1C313A] bg-[#455A64] text-white`;
  const dangerColor = `hover:bg-[#9A0007] bg-[#D32F2F] text-white`;

  const sm = `px-2 py-1`;
  const md = `px-4 py-1.5`;
  const lg = `px-6 py-3`;

  const outline = `border-2 border-[#3D5AFE] text-[#3D5AFE] bg-transparent hover:bg-[#2962FF]/10 shadow-white`;
  const text = `text-[#3D5AFE] bg-transparent hover:bg-[#2962FF]/10  disabled:hover:bg-white shadow-white`;

  const startIco = <MdOutlineLocalGroceryStore />;

  return (
    <button
      disabled={disabled}
      className={`flex space-x-2 font-normal rounded-md text-md  disabled:text-[#9E9E9E] ${
        color === "default"
          ? defaultColor
          : color === "primary"
          ? primaryColor
          : color === "secondary"
          ? secondaryColor
          : color === "danger"
          ? dangerColor
          : ""
      } ${variant === "outline" ? outline : variant === "text" ? text : ""} ${
        size === "sm" ? sm : size === "lg" ? lg : size === "md" ? md : md
      } ${disableShadow ? `shadow-none` : `shadow-md`}`}
    >
      {startIcon === "local_grocery_store" ? (
        <span className="pt-1 pr-1">
          <MdOutlineLocalGroceryStore />
        </span>
      ) : (
        ""
      )}

      {children}
    </button>
  );
};

export default Button;
