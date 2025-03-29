import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import QueryInput from './components/QueryInput';
import QueryHistory from './components/QueryHistory';
import ResultDisplay from './components/ResultDisplay';
const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen pt-7 pl-2 bg-base-100">
        <div className="container mx-auto">
          <h1 className="text-2xl lg:text-3xl text-base-content font-bold mb-6">Gen AI Analytics Dashboard</h1>
          <QueryInput />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <ResultDisplay />
            <QueryHistory />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
