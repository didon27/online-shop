import * as types from './types';

const initState = {
  ad: {
    category: null,
    price: null,
    is_seller_private: true,
    state: 'new',
    currency: 'kwd',
    //Step2
    title: null,
    description: null,
    //Step3
    images: [],
    full_name: null,
    city: { id: 0, name: null },
    email: null,
    phone_number: null,
  },
  //main

  //utils
  categories: null,
};

const adCreateReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case types.SET_VALUE: {
      return {
        ...state,
        ad: {
          ...state.ad,
          [action.name]: action.value,
        },
      };
    }
    case types.ADD_IMAGE: {
      return {
        ...state,
        ad: {
          ...state.ad,
          images: state.ad.images.concat(action.payload),
        },
      };
    }
    default:
      return state;
  }
};

export default adCreateReducer;
