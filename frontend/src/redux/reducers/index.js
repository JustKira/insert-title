import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import { reducer as formReducer } from "redux-form";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "user"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  form: formReducer,
});

export default persistReducer(persistConfig, rootReducer);
