import React from 'react';
import {Route, Switch} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import PostsMainPage from "./containers/PostsMainPage/PostsMainPage";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={PostsMainPage}/>
      </Switch>
    </Layout>
  );
};

export default App;