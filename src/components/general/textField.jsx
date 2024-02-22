import { useState } from "react";
const TextFieldS = ({
    value,
    setValue,
    title,
    background,
    shape,
    borderRadius,
    textColor,
    type,
  }) => {
    const textFieldStyles = {
      background,
      borderRadius,
      shape,
      color: textColor,
      type,
    };
  
    return (
      <div className="flex flex-col gap-1 w-40 h-fit text-center">
        <label placeholder="" htmlFor={title} className="h-6">{value ? title : ""}</label>
        <input
          id={title}
          value={value}
          setValue={setValue}
          type={type}
          className="text-center border-black border-b-2 focus:outline-none"
          placeholder={title}
          style={textFieldStyles}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  };
  export default TextFieldS;