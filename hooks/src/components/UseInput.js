import React, { useState } from 'react';

const useInputFunc = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;

    if (typeof validator === 'function') if (validator(value)) setValue(value);
  };

  return { value, onChange };
};

export default function UseInput() {
  const maxLengthCheck = (value) => value.length <= 10;
  const name = useInputFunc('test', maxLengthCheck);

  return (
    <div>
      <h3>UseInput</h3>
      <input placeholder="Name" {...name} />
      <hr />
    </div>
  );
}
