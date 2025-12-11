import { configureStore } from '@reduxjs/toolkit';
import { kinopoiskApi } from '../shared/api/kinopoiskApi';
import searchQuerySlice from '../features/searchQuerySlice';

export const store = configureStore({
  reducer: {
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
    searchQuerySlice: searchQuerySlice,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(kinopoiskApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
