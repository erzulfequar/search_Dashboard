import { createSlice } from '@reduxjs/toolkit';

const mockData = {
  "sales in q1 2024": { quarter: "Q1 2024", total_sales: 25000 },
  "revenue by region": [
    { region: "North", revenue: 15000 },
    { region: "South", revenue: 20000 },
    { region: "West", revenue: 12000 }
  ],
  "top 5 products by sales": [
    { product: "Product A", sales: 5000 },
    { product: "Product B", sales: 4500 },
    { product: "Product C", sales: 4000 },
    { product: "Product D", sales: 3500 },
    { product: "Product E", sales: 3000 }
  ]
};

const loadHistoryFromLocalStorage = () => {
  const history = localStorage.getItem('queryHistory');
  return history ? JSON.parse(history) : [];
};

const querySlice = createSlice({
  name: 'query',
  initialState: {
    query: '',
    result: null,
    error: '',
    history: loadHistoryFromLocalStorage(),
    loading: false,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    processQuery: (state) => {
      state.loading = true;
      state.error = '';
    },
    setResult: (state, action) => {
      state.loading = false;
      state.result = action.payload;
      const historyEntry = { query: state.query, result: action.payload };
      state.history.unshift(historyEntry);
      localStorage.setItem('queryHistory', JSON.stringify(state.history));
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setQuery, processQuery, setResult, setError } = querySlice.actions;
export default querySlice.reducer;

export const simulateAIResponse = (query) => (dispatch) => {
  dispatch(processQuery());

  setTimeout(() => {
    const lowerQuery = query.toLowerCase();
    if (mockData[lowerQuery]) {
      dispatch(setResult(mockData[lowerQuery]));
    } else {
      dispatch(setError("Sorry, I couldn't understand your query."));
    }
  }, 1500); // Simulate AI processing delay
};
