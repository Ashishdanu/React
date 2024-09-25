
const submitTodo = (newTodo) => {
  return {
    type: 'ADD_TODO',
    payload : newTodo ,

  };
};

export default submitTodo
