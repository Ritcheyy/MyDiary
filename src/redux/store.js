import {createStore} from 'redux';
import rootReducer from './reducers';

const configStore = () => createStore(rootReducer);

export default configStore();
