import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ArticlesPage from './pages/ArticlesPage';
import ArticlesListPage from './pages/ArticlesListPage';
import NavBar from './NavBar';
import ForOhFor from './pages/ForOhFor';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/about" component={AboutPage} />
            <Route path="/article/:name" component={ArticlesPage} />
            <Route path="/articles-list" component={ArticlesListPage} />
            <Route component={ForOhFor} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
