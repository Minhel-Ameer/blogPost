import './App.css';
import Login from './screens/login/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUp from './screens/signUp/SignUp';
import Home from './screens/home/Home';
import PostExp from './screens/single-post/PostExp';
import Navbar from './components/navbar/Navbar';
import AllData from './screens/all/AllData';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component = {Login}/>
          <Route exact path='/signup' component = {SignUp}/>
          <div>
          <Navbar/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/post' component={PostExp}/>
          <Route exact path='/alldata' component={AllData}/>          
          </div>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
