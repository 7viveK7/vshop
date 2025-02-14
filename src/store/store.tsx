import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage"; // For React Native
// import storage from "redux-persist/lib/storage"; // For Web (localStorage)
import authSlice from "./authSlice";
import productsSlice from "./productsSlice";

const persistConfig = {
  key: "auth",
  storage: AsyncStorage, // Use `storage` for Web
  whitelist: ["user"], // Persist only specific state values (optional)
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    products: productsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
