import './App.css';
import Login from './screens/login/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUp from './screens/signUp/SignUp';
// import Forget from './screens/forget/Forget';
import Home from './screens/home/Home';
// import Post from './screens/single-post/Post'
// import Pagination from './screens/experiment/Pagination';
// import Form from './screens/experiment/Form';
import PostExp from './screens/single-post/PostExp';
import Navbar from './components/navbar/Navbar';
import AllData from './screens/all/AllData';
// import PostModal from './components/PostModal';
// import Modal from './screens/experiment/Modal';
// hello

function App() {
  return (
    // <Navbar/>
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route exact path='/' component = {Login}/>
          <Route exact path='/signup' component = {SignUp}/>
          <div>
          <Navbar/>
          






          {/* <Route exact path='/resetpassword' component = {Forget}/> */}
          <Route exact path='/home' component={Home}/>
          <Route exact path='/post' component={PostExp}/>
          {/* <Route exact path='/pagination' component={Pagination}/>
          <Route exact path='/form' component={Form}/> */}
          <Route exact path='/alldata' component={AllData}/>          
          </div>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
