import { legacy_createStore as createStore } from "redux";
import TodoReducer from "./TodoReducer/TodoReducer";



const store = createStore(TodoReducer)
export default store