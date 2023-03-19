import ACTION_TYPES from "../constants";

const initialState = {
  loading: false,
  data: '',
  error: '',
};
export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
      case ACTION_TYPES.API_PENDING:
        return {
          ...state,
          loading: true,
        };
      case ACTION_TYPES.API_SUCCESS:
        return {
          ...state,
          data: action.payload,
          loading: false,
        };
      case ACTION_TYPES.API_ERROR:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
             
       default : 
        return state;
    }
};