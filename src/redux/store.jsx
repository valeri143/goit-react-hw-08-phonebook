import { contactListReducer } from './contactListSlice/contactListSlice';
import { filterReducer } from './filterSlice';
import { userAuthReducer } from './userAuthSlice/userAuthSlice';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const authPersistedReducer = persistReducer(authPersistConfig, userAuthReducer);

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    contacts: contactListReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
