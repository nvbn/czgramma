import * as constants from '../../constants';
import reducer from '../article';

describe('Article reducer', () => {
  it('Set initial state', () => {
    const state = reducer(undefined, {});

    expect(state).toEqual({title: '', content: ''});
  });

  it('Handle fetched article', () => {
    const initialState = {title: '', content: ''};
    Object.freeze(initialState);

    const state = reducer(initialState, {
      type: constants.ACTION_ARTICLE_FETCHED,
      title: 'test-title',
      content: 'test-content',
    });

    expect(state).toEqual({
      title: 'test-title',
      content: 'test-content',
    });
  });

  it('Handled fetching of random article', () => {
    const initialState = {
      title: 'test-title',
      content: 'test-content',
    };
    Object.freeze(initialState);

    const state = reducer(initialState, {
      type: constants.ACTION_FETCH_RANDOM_ARTICLE,
    });

    expect(state).toEqual({title: '', content: ''});
  });
});
