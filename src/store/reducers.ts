import * as fromActions from './actions';

export const initialState = {
  loaded: false,
  loading: false,
  data: [{label: 'Eat pizza', complete: false}]
};

export function reducer (
  state = initialState,
  action: { type: string, payload: any }
){
  switch(action.type) {
    case fromActions.ADD_TODO : {
      const todo = action.payload;
      const data = [...state.data, todo];
      return {
        ...state, data: data
      }
    }

    case fromActions.REMOVE_TODO: {
      const todo = action.payload;
      const data = state.data.filter(td => td.label !== todo.label);
      return {
        ...state, data
      };
    }

  }
  return state;
}
