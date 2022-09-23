import {
   SET_PRODUCTS,
   SET_LOADING,
   SET_SUCCESS,
   SET_ERROR 
  }
from '../../constants/actionTypes'
import axios from 'axios';
// asynchronus
const setProducts =()=>{
  // action asynchronus
  return dispatch => {
    // library to call api
    dispatch(setLoading());
    axios.get('https://fakestoreapi.com/products')
    .then(res=>{
      console.log(res);
      dispatch(setSuccess(res.data));
    })
    .catch(err=>{
      dispatch(setFailure(err.message));
    })
  }
}
// loading
// succes or failure

// sychronus
const setLoading =()=>{
  return {
    type:SET_LOADING
  }
}

const setSuccess =(val)=>{
  return {
    type:SET_PRODUCTS,
    payload: val
  }
}

const setFailure =(val)=>{
  return {
    type:SET_ERROR,
    payload: val
  }
}


export { setProducts };