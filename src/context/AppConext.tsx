"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

import * as App from "@/types/app";

import { persistState, retrieveState } from "@/utils/save-to-local";

const AppContext = createContext<App.Context.AppContext | null>(null);

const initState: App.Context.AppState = {
  posts: [],
  post: null,
};

const appReducer = (
  state: App.Context.AppState,
  action: App.Context.Action
): App.Context.AppState => {
  switch (action.type) {
    case "SET_POSTS":
      return { ...state, posts: action.payload };
    case "SET_POST":
      return { ...state, post: action.payload };
    default:
      return state;
  }
};

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const storedState = retrieveState("appState");

  const [state, dispatch] = useReducer(appReducer, initState, (initial) => {
    return storedState ? storedState : initial;
  });

  useEffect(() => {
    persistState("appState", state);
  }, [state, storedState]);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }

  return context;
};
