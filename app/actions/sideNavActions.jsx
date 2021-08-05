import * as actionTypes from './actionTypes';

export const openSideNav = () => {
  return {
    type: actionTypes.OPEN_SIDE_NAV
  }
}

export const closeSideNav = () => {
  return {
    type: actionTypes.CLOSE_SIDE_NAV
  }
}

// export  const sideNavOpenDispatch = dispatch => ({
//   openSideNav: (payload) => dispatch(openSideNav(payload)),
//   closeSideNav: (payload) => dispatch(closeSideNav(payload))
// });