"use client";
import { useState } from "react";

export const Input = (props: {
  labels: string;
  type: string | undefined;
  placeholder: string;
  onChange: (value: string) => void;
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false); // To track input focus

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    props.onChange(value); // Call the onChange prop with the new value
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    // If the input is empty, remove the focus state
    if (!inputValue) {
      setIsFocused(false);
    }
  };

  // Update the border color based on whether the input is empty or filled
  const styledInput = {
    width: "100%",
    padding: "10px",
    paddingLeft: "5px",
    fontSize: "16px",
    border: `2px solid ${inputValue === "" ? "red" : "green"}`, // Red if empty, green if filled
    outline: "none",
    transition: "border-color 0.3s",
    borderRadius: "5px",
  };

  return (
    <div className="">
      <div
        className={`input-container ${isFocused || inputValue ? "focus" : ""}`}
      >
        <label className="floating-label">{props.placeholder}</label>

        <input
          required
          type={props.type}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur} // Handle blur to remove the focus effect when needed
          style={styledInput} // Apply the dynamic style here
        />
        <small className="phone-helper-text">{props.labels}</small>
      </div>
    </div>
  );
};

export default Input;
