import auth from './components/auth/auth';
import '../styles/main.scss';

console.error('hi');

//be able to login to our app
// be able to log out of our app
// see a login button if we're not logged in
// seee a logout button if we ARE logged in
// see a list of mushrooms (like a forest) if we are logged in

const init = () => {
  auth.loginButton();
}

init();
