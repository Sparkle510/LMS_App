import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../redux/slices/counterSlice';
import authReducer from  '../redux/slices/authSlice';
import cartReducer from '../redux/slices/cartSlice';

import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

// 🔹 Persist config (specifies where and what to persist)
const persistConfig = {
  key: "root", // Key for storage
  storage: AsyncStorage, // Use AsyncStorage for persistence
 // whitelist: ["auth"],
};

// 🔹 Wrap reducers with persistReducer
const persistedCounterReducer = persistReducer(persistConfig, counterReducer);
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
 const persistedCartReducer = persistReducer(persistConfig, cartReducer)

const store = configureStore({
  reducer: {
    Counter: persistedCounterReducer, // Persisted counter state
     auth: persistedAuthReducer, // Persisted auth state
     cart:persistedCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"], // Ignore Persist actions
      },
    }),
});

const persistor = persistStore(store); // Create persistor

export default { store, persistor };
