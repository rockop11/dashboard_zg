import React from 'react';
import SideBar from './components/Sidebar';
import ContentWrapper from './components/ContentWrapper';
import './App.css';

function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <ContentWrapper />
        </div>
    </React.Fragment>
  );
}

export default App;
