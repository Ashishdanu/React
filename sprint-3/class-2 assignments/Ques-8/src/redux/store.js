import { legacy_createStore as createStore } from "redux";
import CounterReducer from "./Counterreducer/CounterReducer";

const store = createStore(CounterReducer);
export default store ;