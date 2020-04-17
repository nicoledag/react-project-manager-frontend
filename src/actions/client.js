
export const setClients = clients => {
  // debugger;
    return {
        type: "FETCH_CLIENTS",
        clients
    }
}


export const fetchClients = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/clients", {
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