// initial state 

const initialState =  'light'
const Themereducer = (state = initialState, action) => {
    switch (action.type) {
        case 'light':
          return 'light';
        case 'dark':
          return 'dark';
        default:
          return state;
      }
};
export default Themereducer ;