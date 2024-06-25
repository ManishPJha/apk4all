import * as App from "@/types/app";

// persist states
function persistState(key: string, state: App.Context.AppState) {
  localStorage.setItem(key, JSON.stringify(state));

  return state;
}

// retrieve context api states from local storage using the provided parameters
function retrieveState(key: string) {
  const state = localStorage.getItem(key);
  if (!state) {
    return null;
  }
  return JSON.parse(state);
}

// remove context api states from local storage using the provided parameters
function removeState(key: string) {
  localStorage.removeItem(key);
}

export { persistState, removeState, retrieveState };
