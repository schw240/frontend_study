import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile' 
import NotFound from './pages/NotFound'
import Links from './components/Links'
import NavLinks from './components/NavLinks';
import Login from './pages/Login'

const isLogin = true;

function App() {
  return (
    <BrowserRouter>
      <Links />
      <NavLinks />
      {/* 이 방식을 이용하면 리액트 방식이 아님. 브라우저에 요청해서 받아오는 방식 */}
      {/* <a href="/">Home</a> */}
      {/* <Link to="/">Home</Link> */}
      <Switch>
        {/* 리액트 Switch
          여러 Route중 순서대로 먼저 맞는 하나만 보여줍니다.
          exact를 뺄 수 있는 로직을 만들 수 있습니다.
          가장 마지막에 어디 path에도 맞지 않으면 보여지는 컴포넌트를 설정해서
          Not Found 페이지를 만들 수 있습니다. */}
        {/* exact를 사용하지 않아도 주소별 라우팅 가능 가장 넓은 범위를 밑으로 내리기 */}
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/login" render={() => (isLogin ? <Redirect to="/" /> : <Login />)} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/about" component={About} />
        {/* 홈페이지에는 exact가 있어야함 없다면 존재하지 않는 모든 페이지가 홈페이지로 이동*/}
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
