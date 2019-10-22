import React, { useState } from "react";
import { IContext, IContextData } from "../types/Context";

let initialState = {
  data: {
    users: undefined
  },
  setData: () => {}
};

const AppContext = React.createContext<IContext>(initialState);

export const AppContextProvider: React.FC<any> = props => {
  const [appState, setAppState] = useState<IContext>(initialState);

  const setData = (key: keyof IContextData, value: any): void => {
    return setAppState({
      ...appState,
      data: { [key]: value }
    });
  };

  return (
    <AppContext.Provider value={{ data: appState.data, setData }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
