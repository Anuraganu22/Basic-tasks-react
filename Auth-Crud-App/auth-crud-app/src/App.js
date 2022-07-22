
import './App.css';
import CombineAuth from './components/CombineAuth';
import { UserAuthContextProvider } from './context/userAuthenticationContext';

function App() {
  return (
    <div className="App">
       <UserAuthContextProvider>
      <CombineAuth/>
      </UserAuthContextProvider>     
    </div>
  );
}

export default App;
