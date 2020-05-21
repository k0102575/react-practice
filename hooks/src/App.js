import React from 'react';
import {
  UseClick,
  UseConfirm,
  UseEffect,
  UseInput,
  UsePreventLeave,
  UseTabs,
  UseTitle,
} from './components';

const App = () => {
  return (
    <div>
      <UseInput />
      <br />
      <UseTabs />
      <br />
      <UseEffect />
      <br />
      <UseTitle />
      <br />
      <UseClick />
    </div>
  );
};

export default App;
