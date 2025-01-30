import React from 'react';

const InputField = ({ placeholder, type = 'text', value, onChange,className  }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`input-field ${className}`}
    />
  );
};

export default InputField;
