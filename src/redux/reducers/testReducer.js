const initialState = {
  dummyVar: 'dummy'
};

export default function (state = initialState, action) {
  if (!state) {
    this.state = initialState;
  }
  switch (action.type) {
    default:
      return state;
    }
}