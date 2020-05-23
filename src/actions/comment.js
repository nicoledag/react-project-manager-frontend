export const myComments = comments => {
    // debugger;
      return {
          type: "FETCH_COMMENTS",
          comments
      }
  }





export const fetchComments = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/comments", {
            credentials: "include",
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
          })
          .then(r => r.json())
          .then(response => {
              if(response.error){
                alert(response.error)
              } else {
                dispatch(myComments(response.data))
              }
          } )
    }
}
