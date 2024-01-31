import { useState } from "react";
const TextFieldS = ({
    value,
    setValue,
    title,
    background,
    shape,
    borderRadius,
    textColor,
    width,
    height,
    type,
  }) => {
    const textFieldStyles = {
      background,
      borderRadius,
      width,
      height,
      shape,
      color: textColor,
      type,
    };
  
    return (
      <div className="flex flex-col gap-1 w-fit h-fit text-center">
        <label placeholder="" htmlFor={title} className="h-6">{value ? title : ""}</label>
        <input
          id={title}
          value={value}
          setValue={setValue}
          type={type}
          className="text-center border-black border focus:outline-none"
          placeholder={title}
          style={textFieldStyles}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  };
  export default TextFieldS;