import React from 'react';
import { useSelector } from 'react-redux';

const QueryHistory = () => {
  const history = useSelector((state) => state.query.history);

  return (
    <div className="card bg-base-100 shadow-md p-4">
      <h2 className="text-lg font-bold">Query History</h2>
      {history.length === 0 ? (
        <p>No queries yet.</p>
      ) : (
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item.query}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QueryHistory;
