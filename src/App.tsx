import React from "react";
import UsersListContainer from "./containers/UsersListContainer";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles/css/App.css";
import ErrorBoundary from "./ErrorBoundary";
import { AppContextProvider } from "./context/AppContext";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <AppContextProvider>
        <BrowserRouter>
          <Route exact path={"/"} component={UsersListContainer} />
        </BrowserRouter>
      </AppContextProvider>
    </ErrorBoundary>
  );
};

export default App;
