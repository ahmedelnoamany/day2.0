import { 
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import logger from 'redux-logger';
import reducer from './reducers';

export default function configureStore(initalState) {
  const enhancer = compose(applyMiddleware(logger));
  const store = createStore(reducer, initalState, enhancer);

  return store;
}