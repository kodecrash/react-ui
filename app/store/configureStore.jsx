import * as redux from 'redux'
import thunk from 'redux-thunk'
import { movieReducer } from '../reducers/movieReducer';
import { genreReducer} from '../reducers/genrereducer';
import { sideNavReducer } from '../reducers/sideNavReducer';
import { userReducer } from '../reducers/userReducer';
import { appointmentsReducer } from '../reducers/appointmentsReducer';
import { composeWithDevTools } from "redux-devtools-extension";
import { profileReducer } from "../reducers/profileReducer";

const configure = (initialState = {}) => {

  const reducer = redux.combineReducers({
    movie: movieReducer,
    genre: genreReducer,
    sidenav: sideNavReducer,
    users: userReducer,
    appointments: appointmentsReducer,
    profile: profileReducer
  });

  const store = redux.createStore(reducer, initialState, composeWithDevTools(
    redux.applyMiddleware(thunk)
  ));

  return store;

};

export default configure;
