import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Posts from './components/Posts';
import Comments from './components/Comments';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/posts" component={Posts} />
        <Route path="/comments/:postId" component={Comments} />
      </Switch>
    </Router>
  );
}

export default App;

import axios from 'axios';

// ...

componentDidMount() {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      // Обработка ответа
    })
    .catch(error => {
      // Обработка ошибки
    });
}

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import postReducer from './reducers/postReducer';
import commentReducer from './reducers/commentReducer';

const rootReducer = combineReducers({
  user: userReducer,
  posts: postReducer,
  comments: commentReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);