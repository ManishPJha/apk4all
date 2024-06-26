import * as App from "@/types/app";

function stringify(obj: object): string {
  return JSON.stringify(obj);
}

// persist states
function persistState(key: string, state: App.Context.AppState) {
  if (!state) return;

  localStorage.setItem(key, JSON.stringify(state));
}

// retrieve context api states from local storage using the provided parameters
function retrieveState(key: string): App.Context.AppState | null {
  if (typeof window !== "undefined" && window) {
    const state = localStorage.getItem(key);
    if (!state) {
      return null;
    }
    return JSON.parse(state);
  }
  return null;
}

// remove context api states from local storage using the provided parameters
function removeState(key: string) {
  localStorage.removeItem(key);
}

export { persistState, removeState, retrieveState };
