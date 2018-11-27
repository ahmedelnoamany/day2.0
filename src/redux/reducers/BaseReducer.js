const initialState = {
  activeView: 0
};

export default function (state = initialState, action) {
  if (!state) {
    this.state = initialState;
  }
  switch (action.type) {
    case 'CHANGE_VIEW' :
      return {
        ...state,
        activeView: action.payload
      }
    default:
      return state;
    }
}