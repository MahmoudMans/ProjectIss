import { useState } from "react";
import "./forminput.css";

export default function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div>
      <div className="formInput">
        <label className="formlabel">{label}</label>
        <input
          className="forminputt"
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          focused={focused.toString()}
        />
        <span className="formspan">{errorMessage}</span>
      </div>
    </div>
  );
}
