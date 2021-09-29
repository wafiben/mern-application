import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
// import UserSingup from './components/UserSingup/UserSingup';
import UserSignIn  from './components/UserSignIn/UserSignIn';

function App() {
  return (
    <div className="App">
     {/*   <UserList></UserList>  */}
       
      <UserSignIn></UserSignIn>  

    </div>
  );
}

export default App;
