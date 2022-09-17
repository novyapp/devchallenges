import React, { useState } from "react";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

type Props = {
  error?: boolean;
  disabled?: boolean;
  helperText?: string;
  startIcon?: boolean;
  endIcon?: boolean;
  value?: string;
  size?: string;
  row?: number;
  multiline?: boolean;
  fullWidth?: boolean;
};

const Input = ({
  error,
  disabled,
  helperText = "",
  startIcon,
  endIcon,
  value,
  size,
  fullWidth,
  multiline,
  row,
}: Props) => {
  const [valueInput, setValueInput] = useState(value);

  const focusLabelColor = `group-focus-within:text-[#2962FF]`;
  const focusInputColor = `focus:ring-[#2962FF] focus:border-[#2962FF]`;
  const errorLabelColor = `text-[#D32F2F]`;
  const errorInputColor = `ring-[#D32F2F] border-[#D32F2F]`;

  const disabledInput = `bg-[#E0E0E0] cursor-not-allowed`;

  const sm = `py-1 px-3`;
  const md = `py-3 px-3`;

  const cssClass = `border outline-1 rounded-[8px] text-sm focus:outline-none focus:ring-1  ${
    size === "md" ? md : size === "sm" ? sm : md
  } ${disabled ? disabledInput : ""} ${
    error ? errorInputColor : focusInputColor
  } ${startIcon ? `pl-10` : ""} ${endIcon ? `pr-10` : ""}`;

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setValueInput(e.currentTarget.value);
  }

  return (
    <div className={`group flex flex-col relative ${fullWidth && `w-full`}`}>
      <label
        className={`${error ? errorLabelColor : focusLabelColor}  text-xs pb-1`}
      >
        Label
      </label>
      {startIcon && (
        <MdOutlineLocalGroceryStore className="pointer-events-none w-6 h-6 absolute top-1/2  left-3" />
      )}
      {endIcon && (
        <MdOutlineLocalGroceryStore className="pointer-events-none w-6 h-6 absolute top-1/2  right-3" />
      )}
      {multiline ? (
        <textarea className={cssClass} rows={row}></textarea>
      ) : (
        <input
          type="text"
          placeholder="Placeholder"
          value={valueInput}
          onChange={handleChange}
          disabled={disabled}
          className={cssClass}
        />
      )}

      {helperText && (
        <span
          className={`pt-1 text-[10px] ${
            error ? `text-[#D32F2F]` : `text-[#828282]`
          }`}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Input;
