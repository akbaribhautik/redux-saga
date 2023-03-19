import ACTION_TYPES from "../constants";

export const fetchData= () => {
   return {
      type: ACTION_TYPES.API_PENDING,
    };
};
export const fetchSuccess= (data) => {
   return {
      type: ACTION_TYPES.API_SUCCESS,
      payload : data,
    };
};
export const fetchError = (error) => {
   return {
      type: ACTION_TYPES.API_ERROR,
      payload:error
    };
};