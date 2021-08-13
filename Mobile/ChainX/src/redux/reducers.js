import {
  SET_PRODUCT_SEARCH,
  SET_PRODUCT_SEARCH_RESULT,
  SET_SEARCH_LOADING,
  SET_ITEM_DETAILS,
  SET_ITEM_DETAIL_LOADING,
  SET_ITEM_DETAIL_RESULT,
  SET_ITEM_BATCH_SELECTION,
  SET_USER_COMMENT,
  SET_USER_COMMENT_MODAL_VISIBILITY,
  SET_USER_COMMENT_ERROR
} from "./actions";

const initState = {
  searchText: "",
  searchResult: [],
  searchError: null,
  isLoading: false,
};

export function searchReducer(state = initState, actions) {
  if (actions.type == SET_PRODUCT_SEARCH) {
    return { ...state, searchText: actions.payload };
  } else if (actions.type == SET_PRODUCT_SEARCH_RESULT) {
    return { ...state, searchResult: actions.payload };
  } else if (actions.type == SET_SEARCH_LOADING) {
    return { ...state, isLoading: actions.payload };
  }
  return state;
}

const initDetailState = {
  itemID: null,
  itemData: [],
  itemDataError: null,
  itemDataIsLoading: false,
  selectedItemNeutrition: [],
  selectedItemNeutritionSummery: "",
  selectedItemIngredients: [],
  selectedItemLegal: [],
  selectedItemFeeback: [],
  selectedItemRating: undefined,
  ingredientsSupplierData: [],
  isBatchSelected: false,
};

export function itemReducer(state = initDetailState, actions) {
  if (actions.type == SET_ITEM_DETAIL_LOADING) {
    return { ...state, itemID: actions.payload };
  } else if (actions.type == SET_ITEM_DETAIL_RESULT) {
    let output = {};
    if (actions.payload.length > 0) {
      output = actions.payload[0];
    }
    return {
      ...state,
      itemData: output,
      selectedItemLegal: output.legal,
      selectedItemFeeback: output.feedback.feedbackData,
      selectedItemRating: output.feedback.overallRating,
      isBatchSelected: false,
    };
  } else if (actions.type == SET_ITEM_BATCH_SELECTION) {
    if (actions.payload === "NoValue") {
      return {
        ...state,
        selectedItemNeutrition: [],
        selectedItemNeutritionSummery: [],
        selectedItemIngredients: [],
        ingredientsSupplierData: [],
        isBatchSelected: false,
      };
    }
    const selectedItem = processItemSelection(state.itemData, actions.payload);

    return {
      ...state,
      selectedItemNeutrition: selectedItem.neutritions.neutritionData,
      selectedItemNeutritionSummery: selectedItem.neutritions.summery,
      selectedItemIngredients: selectedItem.ingredients.ingredientsList,
      ingredientsSupplierData: selectedItem.supplier,
      isBatchSelected: true,
    };
  }
  return state;
}

function processItemSelection(itemData, selection) {
  let output = [];
  itemData.batches.forEach((element) => {
    if (element.batchID == selection) {
      output.push(element);
    }
  });
  return output.length == 0 ? null : output[0];
}

const initialuserRating = {
    modalVisible : false,
    comment : "",
    rating : 0,
    commentError: ""
}

export function userCommentReducer(state = initialuserRating, actions) {
    if (actions.type == SET_USER_COMMENT_MODAL_VISIBILITY) {
        return {...state,modalVisible:actions.payload}
    }else if (actions.type == SET_USER_COMMENT) {
        return {...state,comment:actions.payload.commentInput,rating:actions.payload.ratingInput,modalVisible:false}
    }else if (actions.type == SET_USER_COMMENT_ERROR){
        return {...state,commentError:actions.payload.error}
    }
    return state;
}