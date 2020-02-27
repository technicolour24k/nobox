import React from 'react';
import Navbar from './includes/navbar'
import './includes/styles/base.css';
import './includes/styles/bootstrap4-3-1.min.css';
import Description from './includes/description';

function App() {
  return (
    <div className="App">
      <Navbar />
       	<header class="page-header header container-fluid">
          <div class="overlay"></div>
        </header>

        <Description />
    </div>
  );
}

export default App;
