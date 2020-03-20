import React from 'react';
import {Route, Switch} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import PostsMainPage from "./containers/PostsMainPage/PostsMainPage";
import FullPostPage from "./containers/FullPostPage/FullPostPage";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={PostsMainPage}/>
        <Route path='/posts/:id' exact component={FullPostPage} />
      </Switch>
    </Layout>
  );
};

export default App;