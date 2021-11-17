import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
/* import UserList from "./components/UserList"; */
// import UserSingup from './components/UserSingup/UserSingup';
/* import RegisterForm from "./components/regiterForm/RegisterForm" */
import UserSignIn from "./Components/UserSignIn/UserSignIn";
import UserProfile from "./Components/UserProfile/UserProfile"
import EditProfile from "./Components/EditProfile/EditProfile"
import  RegisterForm from "./Components/regiterForm/RegisterForm"
function App() {
  return (
    <div className="App">
      
     <RegisterForm/>
    </div>
  );
}

export default App;
