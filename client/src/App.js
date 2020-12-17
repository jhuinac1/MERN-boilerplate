import React, { useEffect } from 'react';
import Routes from './config/Routes';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import './firebase/firebase'
import { setAlert } from './actions/alert';



if (localStorage.token) {
    setAuthToken(localStorage.token)
}

const App = () => {
    useEffect(() => {
        store.dispatch(setAlert('Redux store up and running!', 'default'));
    }, [])

    return (
    <Provider store={store}>
        <div>
          <Routes />
        </div>
    </Provider>
)}

export default App;