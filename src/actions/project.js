
export const myProjects = projects => {
    // debugger;
      return {
          type: "FETCH_PROJECTS",
          projects
      }
  }

  export const addProject = project => {
      return {
        type: "ADD_PROJECT",
        project
      }
  }

  export const editMyProject = project => {
      return {
        type: "EDIT_PROJECT",
        project
      }
  }

  export const deleteMyProject = project => {
    return {
      type: "DELETE_PROJECT",
      project
    }
  }
  

  export const addComment = project => {
    return {
      type: "ADD_COMMENT",
      project
    }
  }

  export const deleteMyComment = project => {
    // console.log("action project" , project)
    return {
      type: "DELETE_COMMENT",
      project
    }
  }

  export const editMyComment = project => {
    // console.log("action project" , project)
    return {
      type: "EDIT_COMMENT",
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

  export const editProject = (data) => {
    console.log("data", data)

    return dispatch => {
      return fetch(`http://localhost:3001/api/v1/projects/${data.id}`, {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
      })
      .then(r => r.json())
      .then(response => {
        console.log("Response", response);
        if(response.error){
          alert(response.error)
        }else {
          dispatch(editMyProject(response.data))
        }
      })
    }
  }

  export const deleteProject = (projectId) => {
    return dispatch => {
      return fetch(`http://localhost:3001/api/v1/projects/${projectId}`,{
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then(r=> r.json())
      .then(response => {
        if(response.error){
          alert(response.error)
        }else {
          dispatch(deleteMyProject(response.data))
        }
      })
    }
  }


export const createComment = (data) => {
  console.log("data", data)
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/projects/${data.id}/comments`, {
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
        dispatch(addComment(response.data))
      }
    })
  }

} 


export const deleteComment = (commentId, projectId) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/projects/${projectId}/comments/${commentId}`,{
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(r=> r.json())
    .then(project => {
      if(project.error){
        alert(project.error)
      }else {
        dispatch(deleteMyComment(project.data))
      }
    })
  }
}

export const editComment = (data) => {
  console.log("data", data)

  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/comments/${data.id}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(data)
    })
    .then(r => r.json())
    .then(response => {
      console.log("Response", response);
      if(response.error){
        alert(response.error)
      }else {
        dispatch(editMyComment(response.data))
      }
    })
  }
}
