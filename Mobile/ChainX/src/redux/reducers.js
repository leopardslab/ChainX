import { SET_PRODUCT_SEARCH, SET_PRODUCT_SEARCH_RESULT, SET_SEARCH_LOADING } from "./actions";

const initState = {
  searchText: "",
  searchResult: [],
  searchError: null,
  isLoading : false
};

function searchReducer(state = initState, actions) {
  if (actions.type == SET_PRODUCT_SEARCH) {
    return { ...state, searchText: actions.payload };
  } else if (actions.type == SET_PRODUCT_SEARCH_RESULT) {
    return { ...state, searchResult: actions.payload };
  } else if (actions.type == SET_SEARCH_LOADING) {
    return { ...state, isLoading: actions.payload };
  }
  return state;
}

export default searchReducer;
