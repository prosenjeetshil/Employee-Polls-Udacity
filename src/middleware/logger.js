const logger = (store) => (next) => (action) => {
  console.group(action.type);
  const returnValue  = next(action);
  console.log("The current action");
  console.table(action);
  console.log("The new state");
  console.table(store.getState());
  console.groupEnd();
  return returnValue ;
};

export default logger;
