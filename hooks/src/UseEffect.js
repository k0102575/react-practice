import React, { useState, useEffect } from 'react';

export default function UseEffect() {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);

  const sayHello = () => console.log('hello');

  useEffect(() => sayHello, [numberOne]);

  return (
    <div>
      <button onClick={() => setNumberOne(numberOne + 1)}>{numberOne}</button>
      <button onClick={() => setNumberTwo(numberTwo + 1)}>{numberTwo}</button>
    </div>
  );
}
