import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  pokemon: null,
  pokedex: [],
  pokebag: [],
  isLoading: true,
  showError: false,
};

const AppStateContext = createContext();
const AppDispatchContext = createContext();

const AppReducer = (state, action) => {
  switch (action.type) {
    case "GET_POKEMON": {
      return {
        ...state,
        pokemon: action.payload,
      };
    }
    case "RESET_POKEMON": {
      return {
        ...state,
        pokemon: action.payload,
      };
    }
    case "SHOW_ERROR": {
      return {
        ...state,
        showError: true,
        message: action.payload,
      };
    }
    case "IS_LOADING": {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used withim a AppProvider");
  }

  return context;
};

const useAppDispatch = () => {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error("useAppDispatch must be used within a AppProvider");
  }

  return context;
};

export { AppProvider, useAppState, useAppDispatch };
