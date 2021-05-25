// constants

// action_component_subject
const DECREMENT_TEST_COUNTER = "DECREMENT_TEST_COUNTER";
const INCREMENT_TEST_COUNTER = "INCREMENT_TEST_COUNTER";

// reducers

const initialState = 1;

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT_TEST_COUNTER:
      return state - 1;

    case INCREMENT_TEST_COUNTER:
      return state + 1;

    default:
      return state;
  }
};

export default Reducer;

// actions

const resolveAfter2Seconds = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
};

// action_component_subject
export const decrementTestCounter = () => async (dispatch) => {
  const result = await resolveAfter2Seconds();
  console.log(result);
  dispatch({
    type: DECREMENT_TEST_COUNTER,
  });
};

// action_component_subject
export const incrementTestCounter = () => {
  return {
    type: INCREMENT_TEST_COUNTER,
  };
};
