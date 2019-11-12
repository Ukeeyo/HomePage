export const CHANGE_CONTENT_INDEX = "CHANGE_CONTENT"
export const ADD_CONTENT_PAGE = "ADD_CONTENT_PAGE"
export const CHANGE_VISIBLE_PAGES = "CHANGE_VISIBLE_PAGES"

const PAGE_OBJECT = {
  rows: []
}

export function changeContentIndex(index) {
  return {
    type: CHANGE_CONTENT_INDEX,
    contentIndex: index
  }
}

export function addContentPage(rows = []) {
  const newPage = { ...PAGE_OBJECT }
  newPage.rows = rows
  return {
    type: ADD_CONTENT_PAGE,
    newPage
  }
}

export function changeVisiblePages(pages = []) {
  return {
    type: CHANGE_VISIBLE_PAGES,
    pages
  }
}
