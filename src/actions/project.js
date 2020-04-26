
export const myProjects = projects => {
    // debugger;
      return {
          type: "FETCH_PROJECTS",
          projects
      }
  }
  

  export const addProject = project => {
      return{
        type: "ADD_PROJECT",
        project
      }
  }
  
  export const fetchProjects = () => {
      return dispatch => {
          return fetch("http://localhost:3001/api/v1/projects", {
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
                  dispatch(myProjects(response.data))
                }
            } )
      }
  }

  export const createProject = (data) => {
    return dispatch => {
      return fetch(`http://localhost:3001/api/v1/projects`, {
        credentials: "include",
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(r => r.json())
      .then(response => {
        if(response.error){
          alert(response.error)
        }else {
          dispatch(addProject(response.data))
        }
      })
    }


  }