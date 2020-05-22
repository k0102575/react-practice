import React, { useState, useEffect } from 'react';

const useNetworkFunc = () => {
  const [status, setStatus] = useState(window.navigator.onLine);

  const handleChange = () => {
    console.log('handleChange' + window.navigator.onLine);
    setStatus(window.navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);

    return () => {
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
    };
  }, []);

  return status;
};

function UseNetwork() {
  const online = useNetworkFunc();
  return (
    <div>
      <h1>{online ? 'online' : 'offline'}</h1>
    </div>
  );
}

export default UseNetwork;
