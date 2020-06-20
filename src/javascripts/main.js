import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import auth from './components/auth/auth';
import myNavbar from './components/myNavbar/myNavbar';
import authData from './helpers/data/authData';

import '../styles/main.scss';

console.error('hi');

// be able to login to our app
// be able to log out of our app
// see a login button if we're not logged in
// seee a logout button if we ARE logged in
// see a list of mushrooms (like a forest) if we are logged in

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLoginStatus();
  auth.loginButton();
  myNavbar.logoutEvent();
};

init();
