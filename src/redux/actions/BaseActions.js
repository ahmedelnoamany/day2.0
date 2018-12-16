import {
  CHANGE_VIEW,
  GET_ROUTINE
} from './types';

export const changeView = index => ({
  type: CHANGE_VIEW,
  payload: index
})

