import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({

    /**
     * auth: authentication state
     * project: project state
     * firebase: authentication storage
     * firestore: project storage
     */

    auth: authReducer,
    project: projectReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;