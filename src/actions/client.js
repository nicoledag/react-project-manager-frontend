
export const setClients = () => {
    return {
        type: "FETCH_CLIENTS",
        clients
    }
}


export const fetchClients = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/clients", {
            // Need to allow credientals to get current user businesses.
            // credentials: "include",
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
                dispatch(setClients(response.data))
              }
          } )
    }
}