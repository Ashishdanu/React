// todo reducer

const TodoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { id: action.payload.id, text: action.payload.text }]
   default:
    return state ;
        }


}

export default TodoReducer ;

