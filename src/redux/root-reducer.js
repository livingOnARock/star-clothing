import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// import sessionStorage from "redux-persist/lib/storage"; // if we want session storage
import storage from "redux-persist/lib/storage"; // if we want local storage

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

// json object that represents the possible configurations we want redux-persist to use
const persistConfig = {
  key: "root", // key is what point inside our reducer do we want to start storing everything
  storage,
  whitelist: ["cart"] // array of string names of any of the reducer that we want to store
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
