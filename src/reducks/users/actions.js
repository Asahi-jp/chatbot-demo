// アクションの名前を定義
export const SIGN_IN = "SIGN_IN";
// アクションは純粋にデータのみを書く
export const signInAction = (userState) => {
  return {
    type: "SIGN_IN",
    payload: {
      isSignedIn: true,
      uid: userState.uid,
      username: userState.username
    }
  }
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
  return {
    type: "SIGN_OUT",
    payload: {
      isSignedIn: false,
      uid: "",
      username: ""
    }
  }
};