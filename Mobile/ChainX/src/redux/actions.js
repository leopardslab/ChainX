export const SET_PRODUCT_SEARCH = "SET_PRODUCT_SEARCH";
export const SET_PRODUCT_SEARCH_RESULT = "SET_PRODUCT_SEARCH_RESULT";
export const SET_SEARCH_LOADING = "SET_SEARCH_LOADING";

const HOST_URL = "http://192.168.14.75:5000/";
const PRODUCT_SEARCH_API = "product";

export const setProductSeachText = (text) => (dispatch) => {
  dispatch({
    type: SET_PRODUCT_SEARCH,
    payload: text,
  });
};

export const setProductSeachStatus = (status) => (dispatch) => {
    dispatch({
      type: SET_SEARCH_LOADING,
      payload: status,
    });
  };


export const getProducts = (text) => {
  try {
    return async (dispatch) => {
      const result = await fetch(
          `${HOST_URL}${PRODUCT_SEARCH_API}?text=${encodeURIComponent(text)}`,
        {
          method: "GET"
        }
      );
      const json = await result.json();
      if (json) {
        dispatch({
          type: SET_PRODUCT_SEARCH_RESULT,
          payload: json,
        });
      } else {
        console.log("JSON error");
      }
      dispatch(setProductSeachStatus(false));
    };
  } catch (error) {
    console.log(error);
  }
  dispatch(setProductSeachStatus(false));
};
