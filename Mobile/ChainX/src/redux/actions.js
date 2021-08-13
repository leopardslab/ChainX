export const SET_PRODUCT_SEARCH = "SET_PRODUCT_SEARCH";
export const SET_PRODUCT_SEARCH_RESULT = "SET_PRODUCT_SEARCH_RESULT";
export const SET_SEARCH_LOADING = "SET_SEARCH_LOADING";

const HOST_URL = "http://192.168.14.75:5000/";
const PRODUCT_SEARCH_API = "product";
const PRODUCT_DETAIL_API = "itemData";
const PRODUCT_FEEDBACK_API = "feedback";

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
          method: "GET",
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

export const SET_ITEM_DETAIL_LOADING = "SET_ITEM_DETAIL_LOADING";
export const SET_ITEM_DETAIL_RESULT = "SET_ITEM_DETAIL_RESULT";
export const SET_ITEM_BATCH_SELECTION = "SET_ITEM_BATCH_SELECTION";

export const getItemData = (item) => {
  try {
    return async (dispatch) => {
      const result = await fetch(
        `${HOST_URL}${PRODUCT_DETAIL_API}?item=${encodeURIComponent(item)}`,
        {
          method: "GET",
        }
      );
      const json = await result.json();
      if (json) {
        dispatch({
          type: SET_ITEM_DETAIL_RESULT,
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

export const setItemBatchSelection = (payload) => (dispatch) => {
  dispatch({
    type: SET_ITEM_BATCH_SELECTION,
    payload: payload,
  });
};

export const SET_USER_COMMENT = "SET_USER_COMMENT";
export const SET_USER_COMMENT_MODAL_VISIBILITY =
  "SET_USER_COMMENT_MODAL_VISIBILITY";
  export const SET_USER_COMMENT_ERROR = "SET_USER_COMMENT_ERROR";


  export const setUserComment = (payload) => {
    try {
      return async (dispatch) => {
        const result = await fetch(
          `${HOST_URL}${PRODUCT_FEEDBACK_API}?rating=${encodeURIComponent(payload.ratingInput)}&comment=${encodeURIComponent(payload.commentInput)}`,
          {
            method: "GET",
          }
        );
        const json = await result.json();
        if (json) {
          dispatch({
            type: SET_USER_COMMENT,
            payload: payload,
          });
        } else {
          console.log("JSON error");
        }
        //dispatch(setProductSeachStatus(false));
      };
    } catch (error) {
      console.log(error);
    }
    //dispatch(setProductSeachStatus(false));
  };

export const setUserRatingModalVisible = (payload) => (dispatch) => {
  dispatch({
    type: SET_USER_COMMENT_MODAL_VISIBILITY,
    payload: payload,
  });
};

export const setUserCommentError = (payload) => (dispatch) => {
    dispatch({
      type: SET_USER_COMMENT_ERROR,
      payload: payload,
    });
  };
