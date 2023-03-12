import React from 'react';
import { DashboardView } from './views'
import { ErrorBoundary } from 'components'

const App = () => {
  console.log(process.env.NODE_ENV, ' process.env.NODE_ENV')
  return (
    <ErrorBoundary fallback="Error">
      <DashboardView />
    </ErrorBoundary>
  );
}

export default App;
