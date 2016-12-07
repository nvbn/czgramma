import * as constants from '../constants';

const initialState = {title: '', content: ''};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.ACTION_ARTICLE_FETCHED:
      return {
        ...state,
        title: action.title,
        content: action.content,
      };
    case constants.ACTION_FETCH_RANDOM_ARTICLE:
      return {
        ...state,
        title: '',
        content: '',
      };
    default:
      return state;
  }
};
