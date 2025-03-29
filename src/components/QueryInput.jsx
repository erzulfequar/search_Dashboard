import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, simulateAIResponse } from '../store/querySlice';

const suggestions = [
  "Sales in Q1 2024",
  "Revenue by region",
  "Top 5 products by sales"
];

const QueryInput = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query.query);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(simulateAIResponse(query));
    setShowSuggestions(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => dispatch(setQuery(e.target.value))}
          onFocus={() => setShowSuggestions(true)}
          className="input input-bordered w-full"
          placeholder="Ask a business question..."
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {showSuggestions && (
        <ul className="menu bg-base-200 rounded-box mt-2">
          {suggestions.map((item, index) => (
            <li key={index} onClick={() => dispatch(setQuery(item))}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QueryInput;
