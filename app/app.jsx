import React, {useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import css from './styles.scss'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import  Header  from './components/Header/Header';
import SideNav from './components/SideNav/SideNav';
import Overlay from './components/Overlay/Overlay';
import configure from 'configureStore';
import { openSideNav, closeSideNav }  from './actions/sideNavActions';
import { useSelector, useDispatch } from 'react-redux';
import Dashboard from './containers/Dashboard/Dashboard';
import Appointments from './containers/Appointments/Appointments';
import ManageUsers from './containers/ManageUsers/ManageUsers';
import Profile from './containers/Profile/Profile';
import Login from './containers/Login/Login';

const store = configure();
const App = (props) =>  {

  const [token, setToken] = useState(false);

  

  const  { isSideNavOpen } = useSelector(state => state.sidenav);
  const dispatch = useDispatch();
  const toggleSideNav = () => {
    console.log('Sidenav Toggle called');
    if (!isSideNavOpen) {
      dispatch(openSideNav());
    } else {
      dispatch(closeSideNav());
    }
  }

  useEffect(() => {
   // dispatch(getAllUsers());
    // return () => {
    //   // clean up event listneres here
    // }
  }, []);

  // empty array is like component did mount
  // use state variables in array to fire useEffect only when these state variables changed
     
  return (
    <BrowserRouter>
    {
      (!token)? <Login setToken={setToken} />:  (<div className="wrapper">
      <SideNav isOpen={isSideNavOpen} />
      <div className="main-panel">
        <Header toggleSideNav={toggleSideNav} />
        <div className="content">
          <Switch>
            <Route exact path={["/", "/dashboard"]} component={Dashboard} />
            <Route exact path="/appointments" component={Appointments} />
            <Route path="/manageusers" component={ManageUsers} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      </div>
      <Overlay show={isSideNavOpen} touch={toggleSideNav} />
    </div>)
      
    }
     
    </BrowserRouter>
  )
}

ReactDOM.render(
 <Provider store={store}>
    <App />
 </Provider>
 , document.getElementById('root')
);
