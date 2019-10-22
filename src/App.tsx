import React from "react";
import UsersListContainer from "./containers/UsersListContainer";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles/css/App.css";
import ErrorBoundary from "./ErrorBoundary";
import { AppContextProvider } from "./context/AppContext";
import useAuthentication from "./hooks/useAuthentication";

const App: React.FC = () => {
  const [authenticated] = useAuthentication();

  console.log(authenticated);

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
