import logo from "./logo.svg";
import "./App.css";
import UserList from "./components/UserList";
// import UserSingup from './components/UserSingup/UserSingup';
import RegisterForm from "./components/regiterForm/RegisterForm"
import UserSignIn from "./components/UserSignIn/UserSignIn";

function App() {
  return (
    <div className="App">
      {/*  <UserSignIn></UserSignIn>  */}
     <RegisterForm/> 
    </div>
  );
}

export default App;
