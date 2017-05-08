import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import muiTheme from './styles/mui-theme';

import App from './containers/App';
import MainLayout from './layouts/MainLayout';
import Categories from './containers/Categories';
// import Post from './components/Post';

import Welcome from './containers/Welcome';
import PostList from './containers/PostList';




import './styles/index.css';

// import './containers/App/index.js';
// Needed for onTouchTap (Material UI)
// http://stackoverflow.com/a/34015469/988941

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

// The Store is the thing that brings it all together: it represents the state by using the rootReducer, any middleware (Thunk in our case), and allows you to actually dispatch actions.
// For using Redux in React, the <Provider> component wraps the entire application and passes the store down to all children.

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router>
        <MainLayout>
          <App>
            <Categories />
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/posts" component={PostList} />
            </Switch>
          </App>
        </MainLayout>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
