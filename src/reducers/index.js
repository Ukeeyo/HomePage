import { CHANGE_CONTENT_INDEX , ADD_CONTENT_PAGE, CHANGE_VISIBLE_PAGES } from '../actions';
import INITIAL_PAGES from '../fixtures/initialPages';

const initialState = {
  contentIndex: 0,
  contentPages: INITIAL_PAGES.pages,
  header: INITIAL_PAGES.header,
  visiblePages: []
};

export default function content(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CONTENT_INDEX:
      return Object.assign({}, state, {
        contentIndex: action.contentIndex
      })
    case ADD_CONTENT_PAGE:
      return Object.assign({}, state, {
        contentPages: [
          ...state.contentPages,
          action.newPage
        ]
      })
    case CHANGE_VISIBLE_PAGES:
      return Object.assign({}, state, {
        visiblePages: action.pages
      })
    default:
      return state;
  }
}