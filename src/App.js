// App.js

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './redux/actions';
import Home from './components/Home';
import Detail from './components/Detail';
import './App.css';


const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/item/:id" component={Detail} />
      </Switch>
    </Router>
  );
};

export default App;
