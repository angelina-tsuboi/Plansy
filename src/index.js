import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux'
import { createFirestoreInstance, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase'
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyClch24BAHqpwl916YK-RMD8IdnItw5LfY",
    authDomain: "blogello.firebaseapp.com",
    databaseURL: "https://blogello.firebaseio.com",
    projectId: "blogello",
    storageBucket: "blogello.appspot.com",
    messagingSenderId: "1066845201858",
    appId: "1:1066845201858:web:7bd47f0bbf5ec644d4225b",
    measurementId: "G-8N180THH8F"
};
firebase.initializeApp(config);
firebase.firestore();

const store = createStore(rootReducer, 
  compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
));

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

ReactDOM.render(
  <Provider store={store}>
  <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
  </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
