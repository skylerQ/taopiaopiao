import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import logo from './logo.svg';
import Home from './routes/home/index.jsx'
import './App.css';

// const Test = ()=>{
//   return <p>测试组件</p>
// }
// const Index = ()=>{
//   return <p>这是主页</p>
// }
// const User = () =>{
//   return <p>用户页</p>
// }

// const Login = () =>{
//   return <p>请登录</p>
// }


// const NotFound = () =>{
//   return <p>404无法访问</p>
// }

// let isLogin = false;

//配置路由
//inclusive
// React路由配置的路径是包含原则，例如'/path/test' 会被react拆分为'/' & '/path' & '/path/test',这三份路径对应的组件都会展示在页面上
function App() {
  return (
    <div className="App">
      {/* path就是地址，component是指这条地址所对应的组件式什么 */}
      <BrowserRouter>
      <Switch>
      <Route path='/' exact component={Home} />
      {/* <Route path='/test' exact component={Test} />
      <Route path='/login' exact component={Login} />
      <Route path='/user' exact render={()=>isLogin?<User/>:<Redirect to="/login"/>} />
      <Route component={NotFound} /> */}
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
