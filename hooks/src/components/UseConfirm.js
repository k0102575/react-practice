import React from 'react';

const useConfirmFunc = (message = '', confirmEvent, cancelEvent) => {
  if (
    (!confirmEvent && typeof confirmEvent !== 'function') ||
    (!cancelEvent && typeof cancelEvent !== 'function')
  )
    return;

  const confirmAction = () => {
    window.confirm(message) ? confirmEvent() : cancelEvent();
  };

  return confirmAction;
};

function UseConfirm() {
  const confirmEvent = () => console.log('confirm Event');
  const cancelEvent = () => console.log('Cancel Event');
  const confirmDelete = useConfirmFunc(
    'Are You Sure???',
    confirmEvent,
    cancelEvent,
  );

  return (
    <div>
      <h3>UseConfirm</h3>
      <button onClick={confirmDelete}>DeleteButton</button>
      <hr />
    </div>
  );
}

export default UseConfirm;
