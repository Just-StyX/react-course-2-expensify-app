import moment from "moment";

const SET_TEXT_FILTER = "SET_TEXT_FILTER";
const SORT_BY_DATE = "SORT_BY_DATE";
const SORT_BY_AMOUNT = "SORT_BY_AMOUNT";
const SET_START_DATE = "SET_START_DATE";
const SET_END_DATE = "SET_END_DATE";

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month")
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return {
        ...state,
        text: action.text
      };
    case SORT_BY_AMOUNT:
      return {
        ...state,
        sortBy: "amount"
      };
    case SORT_BY_DATE:
      return {
        ...state,
        sortBy: "date"
      };
    case SET_START_DATE:
      return {
        ...state,
        startDate: action.startDate
      };
    case SET_END_DATE:
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

export default filtersReducer;
