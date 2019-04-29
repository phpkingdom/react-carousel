import React, { Component, Fragment } from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import MovieList from './container/MovieList';
import MovieDetail from './container/MovieDetail';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path='/movie/:id' component={MovieDetail} />
          <Route path='/' component={MovieList} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
