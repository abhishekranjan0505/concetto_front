/**
 * get the scroll of page
 * @return {number}
 */
export const getScrollPage = () => {
  let docScrollTop = 0;
  if (document.documentElement && document.documentElement !== null) {
    docScrollTop = document.documentElement.scrollTop;
  }
  return window.pageYOffset || docScrollTop;
};

/**
 * get the scroll of a parent element
 * @return {number}
 */
export const getScrollElement = (elementId) => {
  let elemScrollTop = 0;
  const element = document.getElementById(elementId);
  if (element !== null) {
    elemScrollTop = element.scrollTop;
  }
  return elemScrollTop;
};

/**
 * scroll to y number of a page
 * @param {number} scrollnumber
 * @return {void}
 */
export const scrollTo = (scrollnumber = 0) => window.requestAnimationFrame(() => {
  window.scrollTo(0, scrollnumber);
});

/**
 * scroll to y number inside an element
 * @param {number} scrollnumber
 * @return {void}
 */
export const scrollToElement = (
  scrollnumber = 0,
  elementId,
) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollTop = scrollnumber;
  }
};

/**
 * verif if window exist
 * @return boolean
 */
export const isBrowser = () => typeof window !== 'undefined';
