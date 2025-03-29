import React from 'react';
import { useSelector } from 'react-redux';
import ChartDisplay from './ChartDisplay';

const ResultDisplay = () => {
  const { result, error, loading } = useSelector((state) => state.query);

  if (loading) return <p className="text-blue-500">Processing your query...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!result) return <p>No results to display.</p>;

  return (
    <div className="card bg-base-100 shadow-md p-4">
      <h2 className="text-lg font-bold">Results</h2>
      <ChartDisplay data={result} />
    </div>
  );
};

export default ResultDisplay;
