import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./root.reducer";
import { createWrapper } from "next-redux-wrapper";

export const store = ()=> configureStore({
  reducer: RootReducer,
  /*************  ✨ Codeium Command ⭐  *************/
  /**
   * The middleware added to the store. We concatenate the default
   * middleware with the middleware from the api, which is where the
   * RTK Query caching and other useful features are implemented.
   */
  /******  db838398-3642-4e10-8347-6ce93b9607e7  *******/
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(api.middleware),
  devTools: process.env.NODE_ENV !== "production",
});
export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(store);
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
