import React from "react";
import { DashboardView } from "./views";
import { ErrorBoundary } from "components";

const App = () => {
  const testVar = 1;
  console.log(testVar);

  return (
    <ErrorBoundary fallback="Error">
      <DashboardView />
    </ErrorBoundary>
  );
};

export default App;
