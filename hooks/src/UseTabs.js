import React, { useState } from 'react';

const content = [
  {
    tab: 'section 1',
    content: "I'm content of the Section 1",
  },
  {
    tab: 'section 2',
    content: "I'm content of the Section 2",
  },
  {
    tab: 'section 3',
    content: "I'm content of the Section 3",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) return;
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const UseInput = () => {
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div>
      {content.map((section, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default UseInput;
