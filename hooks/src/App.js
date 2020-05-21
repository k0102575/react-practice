import React from 'react';
import UseTabs from './UseTabs';
import UseInput from './UseInput';
import UseEffect from './UseEffect';
import UseTitle from './UseTitle';

const App = () => {
  return (
    <div>
      <UseInput />
      <br />
      <br />
      <UseTabs />
      <br />
      <br />
      <UseEffect />
      <br />
      <br />
      <UseTitle />
    </div>
  );
};

export default App;
