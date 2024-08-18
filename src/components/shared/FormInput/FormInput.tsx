import React from "react";

interface TextInputProps
  extends Required<
    Pick<
      React.InputHTMLAttributes<HTMLInputElement>,
      "type" | "value" | "onChange" | "required"
    >
  > {
  label?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  type,
  value,
  onChange,
  required,
  label,
}) => {
  const defaultLabel = label
    ? label
    : `${type?.charAt(0).toLocaleUpperCase()}${type?.substring(1)}`;

  return (
    <label>
      <input
        type={type}
        placeholder={defaultLabel}
        value={value}
        onChange={onChange}
        required={required}
      />

      <span>{defaultLabel} </span>
    </label>
  );
};

export default TextInput;
