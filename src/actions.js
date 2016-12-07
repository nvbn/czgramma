import { push } from 'react-router-redux'
import fetchJsonp from 'fetch-jsonp';
import * as constants from './constants';

export const fetchRandomArticle = () => (dispatch) => {
  fetchJsonp(`${constants.WIKI_API}action=query&list=random&rnlimit=1&rnnamespace=0&format=json`)
    .then((response) => response.json())
    .then((json) => dispatch(push(`/article/${json.query.random[0].title}`)));
};

export const fetchArticle = (title) => (dispatch) => {
  fetchJsonp(`${constants.WIKI_API}action=query&prop=extracts&exintro=&explaintext=&titles=${title}&format=json`)
    .then((response) => response.json())
    .then((json) => {
      const pages = json.query.pages;
      const pageId = Object.getOwnPropertyNames(pages)[0];

      if (pageId && pageId !== '-1') {
        dispatch(articleFetched(title, pages[pageId].extract));
      } else {
        dispatch(push('/404'));
      }
    });
};

export const articleFetched = (title, content) => ({
  type: constants.ACTION_ARTICLE_FETCHED,
  title,
  content,
});
