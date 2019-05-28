import { types } from '../actions/todoAction';

const initialState = {
  todos: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  const { todos } = state;

  switch (type) {
    case types.ADD_ITEM:
      return {
        ...state,
        todos: [{ label: payload, completed: false }, ...todos],
      };

    case types.REMOVE_ITEM:
      return {
        ...state,
        todos: todos.filter((todo, i) => i !== payload),
      };

    default:
      return state;
  }
};
