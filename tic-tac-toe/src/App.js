import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile' 
import NotFound from './pages/NotFound'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* 리액트 Switch
          여러 Route중 순서대로 먼저 맞는 하나만 보여줍니다.
          exact를 뺄 수 있는 로직을 만들 수 있습니다.
          가장 마지막에 어디 path에도 맞지 않으면 보여지는 컴포넌트를 설정해서
          Not Found 페이지를 만들 수 있습니다. */}
        {/* exact를 사용하지 않아도 주소별 라우팅 가능 가장 넓은 범위를 밑으로 내리기 */}
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
