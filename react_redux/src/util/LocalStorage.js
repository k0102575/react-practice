export const getItem = (itemName) => {
  return JSON.parse(localStorage.getItem(itemName));
};

export const setItem = (itemName, item) => {
  localStorage.setItem(itemName, JSON.stringify(item));
  return getItem(itemName);
};
