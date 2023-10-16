export function createAction(type, payload) {
  return { type, payload };
}

export function createActionDispatch(dispatch, type) {
  return (payload) => dispatch(createAction(type, payload));
}
