import React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement>  {
  label?: string;
}

export const TextInput: React.FC<TextInputProps> = ({ type, value, onChange, required, label }) => {

  const defaultLabel = label ? label : `${type?.charAt(0).toLocaleUpperCase()}${type?.substring(1)}`

  return (<div style={{display: 'flex', gap: '1em'}}>
    <label style={{flex: 1}}>{defaultLabel}: </label>
    <input style={{flex: 1}}
      type={type}
      value={value}
      onChange={onChange}
      required={required}

    />
  </div>)


}

export default TextInput