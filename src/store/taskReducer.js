import { taskDeleted, taskUpdated } from './actionTypes';

export function taskReducer(state = [], action) {
  switch (action.type) {
    case taskUpdated: {
      const newArr = [...state];
      const arrIndex = newArr.findIndex(el => el.id === action.payload.id);
      newArr[arrIndex] = {...newArr[arrIndex], ...action.payload};
      return newArr;
    }

    case taskDeleted: {
      return [...state.filter(el => el.id !== action.payload.id)];
    }

    default: return state;
  }
}