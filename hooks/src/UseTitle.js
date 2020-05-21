import React, { useState, useEffect } from 'react';

const useTitleFunc = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    console.log('updateTitle');
    const htmlElement = document.querySelector('title');
    htmlElement.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

function UseTitle() {
  const titleUpdater = useTitleFunc('Loading...');
  setTimeout(() => titleUpdater('Home'), 5000);

  return <div></div>;
}

export default UseTitle;
