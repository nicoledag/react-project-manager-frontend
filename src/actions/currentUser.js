// synchronous action creators
export const setCurrentUser = user => {
    return {
      type: "SET_CURRENT_USER",
      user
    }
  }

export const signup = (credentials) => {
    console.log(credentials)
    return dispatch => {
      const userInfo = {
        user: credentials
      }
      // create userInfo to nest credientals under user
      return fetch("http://localhost:3001/api/v1/signup", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
      })
        .then(r => r.json())
        .then(response => {
          console.log(response);
          console.log(response.error);
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setCurrentUser(response))
          }
        })
    }
  }