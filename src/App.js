import React from "react";
import { DashboardView } from "./views";
import { ErrorBoundary } from "components";

const App = () => {
  return (
    <ErrorBoundary fallback="Error">
      <DashboardView />
    </ErrorBoundary>
  );
};

export default App;
