import React from 'react';
import AppRouter from './routes/AppRouter';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <div className="App">
      <AppRouter />
      <Analytics />
    </div>
  );
};

export default App;
