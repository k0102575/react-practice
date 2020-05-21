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
      <UseClick />
      <br />
      <UseConfirm />
      <br />
      <UseEffect />
      <br />
      <UseInput />
      <br />
      <UsePreventLeave />
      <br />
      <UseTabs />
      <br />
      <UseTitle />
      <br />
    </div>
  );
};

export default App;
