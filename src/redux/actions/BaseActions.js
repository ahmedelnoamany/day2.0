import {
  CHANGE_VIEW
} from './types';

export const changeView = index => ({
  type: CHANGE_VIEW,
  payload: index
})
