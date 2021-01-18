import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Top } from './pages/Top'
import { About } from './pages/About'
import { Articles } from './pages/Articles';

function App() {
  return (
    <Router>
      <ul>
        <li><Link to="/">トップ</Link></li>
        <li><Link to="/about">アバウト</Link></li>
        <li><Link to="/articles">記事</Link></li>
      </ul>
      <Route path="/" exact component={Top}></Route>
      <Route path="/about" exact component={About}></Route>
      <Route path="/articles" exact component={Articles}></Route>
    </Router>
  )
}

export default App;
