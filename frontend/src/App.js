import React from 'react';
import {Route, Switch} from "react-router-dom";

import './App.css'
import Layout from "./components/Layout/Layout";
import PostsMainPage from "./containers/PostsMainPage/PostsMainPage";
import FullPostPage from "./containers/FullPostPage/FullPostPage";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";

const App = () => {
  return (
    <Layout>
      <div className="App">
        <Switch>
          <Route path='/' exact component={PostsMainPage}/>
          <Route path='/register' exact component={Register}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/posts/:id' exact component={FullPostPage} />
        </Switch>
      </div>
    </Layout>
  );
};

export default App;