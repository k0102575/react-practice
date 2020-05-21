import React, { useState, useEffect, useRef } from 'react';

const useClickFunc = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener('click', onClick);
    }

    return () => {
      if (element.current) {
        element.current.removeEventListener('click', onClick);
      }
    };
  }, []);
  return element;
};

function UseClick() {
  const sayHello = () => console.log('say Hello');
  const title = useClickFunc(sayHello);

  return (
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  );
}

export default UseClick;
