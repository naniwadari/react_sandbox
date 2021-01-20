import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import { Top } from './pages/Top'
import { About } from './pages/About'
import { Articles } from './pages/Articles'
import { Login } from './pages/Login'
import { Logout } from './pages/Logout'
import { Auth } from './auth/Auth'

function App() {
  return (
    <Router>
      <ul>
        <li><Link to="/">トップ</Link></li>
        <li><Link to="/login">ログイン</Link></li>
        <li><Link to="/logout">ログアウト</Link></li>
        <li><Link to="/about">アバウト</Link></li>
        <li><Link to="/articles">記事</Link></li>
        <li><Link to="/redirect">テスト</Link></li>
      </ul>
      <Switch>
        <Route path="/" exact component={Top}></Route>
        <Route path="/login" exact component={Login}></Route>
      </Switch>
      <Auth>
        <Switch>
          <Route path="/logout" exact component={Logout}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/articles" exact component={Articles}></Route>
          <Route path="/redirect" exact component={() => {return <Redirect to="/" />}} />
        </Switch>
      </Auth>
    </Router>
  )
}

export default App;
