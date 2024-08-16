import React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement>  {
  label: string;
}

export const TextInput: React.FC<TextInputProps> = ({ type, value, onChange, required, label }) => {

  return (<div style={{display: 'flex', gap: '1em'}}>
    <label style={{flex: 1}}>{label}: </label>
    <input style={{flex: 1}}
      type={type}
      value={value}
      onChange={onChange}
      required={required}

    />
  </div>)


}

export default TextInput