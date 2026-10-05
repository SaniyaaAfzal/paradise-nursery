```jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your one-stop destination
          for beautiful and healthy houseplants.
        </p>

        <button
          className="get-started-btn"
          onClick={() => window.location.href = '/plants'}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
```
