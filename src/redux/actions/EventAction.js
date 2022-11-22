export const addEvent = (task) => {
  let action = { type: "ADD_NEW_EVENT", data: task };
  return action;
};
