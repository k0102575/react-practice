import React from 'react';
import UseTabs from './UseTabs';
import UseInput from './UseInput';
import UseEffect from './UseEffect';
import UseTitle from './UseTitle';
import UseClick from './UseClick';

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
      <br />
      <br />
      <UseClick />
    </div>
  );
};

export default App;
