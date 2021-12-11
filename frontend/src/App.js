import React, { useEffect, useState } from 'react'

import './App.css';

function App() {
  useEffect(() => {
    fetch('http://localhost:8000/')
    .then(res => res.json())
    .then(
      (result) => {
        setParent('');
        setData(result);
      },
      (error) => {

      }
    )
  }, [])
  return (
    <div className="App">

    </div>
  );
}

export default App;
