import * as types from './types';

const initState = {
  threads: null,
  messages: null,
  loading: true,
};

const chatReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_THREADS: {
      return {
        ...state,
        threads: action.payload,
      };
    }
    case types.SET_OLD_THREADS: {
      return {
        ...state,
        threads: {
          ...action.payload,
          results: state.threads.results.concat(action.payload.results),
        },
      };
    }
    case types.SET_MESSAGES: {
      return {
        ...state,
        messages: action.payload,
      };
    }
    case types.SET_MESSAGE: {
      var newMessageList = state.messages.results;
      newMessageList.unshift(action.payload);

      return {
        ...state,
        messages: {
          ...state.messages,
          results: newMessageList,
        },
      };
    }
    case types.SET_OLD_MESSAGE: {
      return {
        ...state,
        messages: {
          ...action.payload,
          results: state.messages.results.concat(action.payload.results),
        },
      };
    }
    case types.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
};

export default chatReducer;
