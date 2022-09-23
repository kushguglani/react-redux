import { SET_PRODUCTS,SET_LOADING,SET_ERROR } from '../../constants/actionTypes';

const INIT_STATE = {
  loading:false,
  productList:[],
  error:""
};

const productsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        productList:action.payload,
        loading:false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading:true,
      }

    case SET_ERROR:
      return {
        ...state,
        loading:false,
        error:action.payload
      }

    default:
      return state;
  }
};

export default productsReducer;