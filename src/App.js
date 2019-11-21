import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './views/app.css';
import { ProjectsList } from './views/Projects';

function App() {
  return (
    <main className="main-site">
    <ProjectsList></ProjectsList>
    </main>
  );
}

export default App;
