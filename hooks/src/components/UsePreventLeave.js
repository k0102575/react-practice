import React from 'react';

const usePreventLeaveFunc = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = '';
  };
  const enablePrevent = () => window.addEventListener('beforeunload', listener);
  const disabledPrevent = () =>
    window.removeEventListener('beforeunload', listener);

  return {
    enablePrevent,
    disabledPrevent,
  };
};

function UsePreventLeave() {
  const { enablePrevent, disabledPrevent } = usePreventLeaveFunc();

  return (
    <div>
      <h3>UsePreventLeave</h3>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disabledPrevent}>unProtect</button>
      <hr />
    </div>
  );
}

export default UsePreventLeave;
