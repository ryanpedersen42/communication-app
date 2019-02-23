

export default function signOut(authStatus) {
  return {
    type: 'SIGN_OUT',
    payload: {
      status: authStatus
    }
  }
}