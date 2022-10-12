// cresting the store
import { createStore } from "redux";
import displayUserProfile from "./Reducer/userReducer";


const store = createStore(displayUserProfile);

export default store;