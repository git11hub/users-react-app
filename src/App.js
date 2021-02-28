import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import usersData from './fake-data/data.json';
import User from './components/User/User';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(usersData);
    // const user = users.map(user => user.name)
    // console.log(users.map(user => user.name));
  }, [])

  return (
    <div className="App">
      <h1>Hello Hi</h1>
      {
        users.map(user => <User user={user}></User>)
      }
      {/* <User users={users}></User> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
