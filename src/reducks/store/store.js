import {
  legacy_createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

// Import reducers
import { UsersReducer } from '../users/reducers';

// history==ブラウザヒストリー
export default function createStore(history) {
  return reduxCreateStore(
    // combineReducersはオブジェクトをreturnする
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer
    }),
    applyMiddleware(
      routerMiddleware(history)
    )
  );
}