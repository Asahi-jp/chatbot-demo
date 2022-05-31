// actions.hogeの形で取り出せる
import * as Actions from './actions'
import initialState from '../store/initialState' // 初期データ

// state==初期データ、action==アクション
export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    // 受け取ったアクションのタイプがサインインの場合
    case Actions.SIGN_IN:
      // 初期値をセットすることで必要なフィールドが消されない
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}