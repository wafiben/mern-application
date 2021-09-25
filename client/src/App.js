import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import UserSingup from './components/UserSingup/UserSingup'

function App() {
  return (
    <div className="App">
      {/* <UserList></UserList> */}
      <UserSingup></UserSingup>
    </div>
  );
}

export default App;
