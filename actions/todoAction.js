export const types = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  TOGGLE_ITEM_COMPLETED: 'TOGGLE_ITEM_COMPLETED',
  REMOVE_COMPLETED: 'REMOVE_COMPLETED',
};

export const addItem = item => {
  return {
    type: types.ADD_ITEM,
    payload: item,
  };
};
export const removeItem = index => {
  return {
    type: types.REMOVE_ITEM,
    payload: index,
  };
};
export const toggleCompleted = index => {
  return {
    type: types.TOGGLE_ITEM_COMPLETED,
    payload: index,
  };
};

export const removeCompleted = () => {
  return {
    type: types.REMOVE_COMPLETED,
  };
};
